import React, { useState } from 'react';
import './InfoPayment.css';

function InfoPayment({ onSubmit }) {
  const [formData, setFormData] = useState({
    deliveryInfo: {
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
    },
    paymentInfo: {
      nameOnCard: '',
      cardNumber: '',
      securityCode: '',
      expiryDate: '',
    },
    errors: { // Track errors for each field
      deliveryInfo: {},
      paymentInfo: {},
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, subField] = name.split('.');
    
    setFormData(prevState => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        [subField]: value
      }
    }));
  };

  const validateForm = () => {
    const { deliveryInfo, paymentInfo } = formData;
    const errors = { deliveryInfo: {}, paymentInfo: {} };
    let isValid = true;

    // Check delivery info fields
    for (const key in deliveryInfo) {
      if (deliveryInfo[key] === '') {
        errors.deliveryInfo[key] = true;
        isValid = false;
      }
    }

    // Check payment info fields
    for (const key in paymentInfo) {
      if (paymentInfo[key] === '') {
        errors.paymentInfo[key] = true;
        isValid = false;
      }
    }

    setFormData(prevState => ({
      ...prevState,
      errors: errors,
    }));

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const { errors } = formData;

  return (
    <div parent-element>
    <form onSubmit={handleSubmit} className="info-containerss">
      <div className="info-section">
        <h3>Delivery Information</h3>
        <input type="text" name="deliveryInfo.streetAddress" value={formData.deliveryInfo.streetAddress} onChange={handleChange} placeholder="Street Address" className={errors.deliveryInfo.streetAddress && 'error'} />
        <input type="text" name="deliveryInfo.city" value={formData.deliveryInfo.city} onChange={handleChange} placeholder="City" className={errors.deliveryInfo.city && 'error'} />
        <input type="text" name="deliveryInfo.state" value={formData.deliveryInfo.state} onChange={handleChange} placeholder="State" className={errors.deliveryInfo.state && 'error'} />
        <input type="text" name="deliveryInfo.zipCode" value={formData.deliveryInfo.zipCode} onChange={handleChange} placeholder="Zip Code" className={errors.deliveryInfo.zipCode && 'error'} />
        <input type="text" name="deliveryInfo.email" value={formData.deliveryInfo.email} onChange={handleChange} placeholder="Email" className={errors.deliveryInfo.email && 'error'} />

      </div>
      <div className="info-section">
        <h3>Payment Information</h3>
        <input type="text" name="paymentInfo.nameOnCard" value={formData.paymentInfo.nameOnCard} onChange={handleChange} placeholder="Name on Card" className={errors.paymentInfo.nameOnCard && 'error'} />
        <input type="text" name="paymentInfo.cardNumber" value={formData.paymentInfo.cardNumber} onChange={handleChange} placeholder="Card Number" className={errors.paymentInfo.cardNumber && 'error'} />
        <input type="text" name="paymentInfo.securityCode" value={formData.paymentInfo.securityCode} onChange={handleChange} placeholder="Security Code" className={errors.paymentInfo.securityCode && 'error'} />
        <input type="text" name="paymentInfo.expiryDate" value={formData.paymentInfo.expiryDate} onChange={handleChange} placeholder="Expiry Date (MM/YY)" className={errors.paymentInfo.expiryDate && 'error'} />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
    </div>
  );
}

export default InfoPayment;