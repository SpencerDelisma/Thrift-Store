import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    deliveryInfo: {
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      email: '',
    },
    paymentInfo: {
      nameOnCard: '',
      cardNumber: '',
      securityCode: '',
      expiryDate: '',
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    
        console.log('Event:', e);
        console.log('Name:', e.target.name);
        console.log('Value:', e.target.value);
    
    const { name, value } = e.target;
    const { deliveryInfo, paymentInfo } = formData;

    setFormData(prevState => ({
      ...prevState,
      [name.startsWith('delivery') ? 'deliveryInfo' : 'paymentInfo']: {
        ...prevState[name.startsWith('delivery') ? 'deliveryInfo' : 'paymentInfo'],
        [name.replace('delivery', '').replace('payment', '')]: value
      }
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    const { deliveryInfo, paymentInfo } = formData;

    // Validation for delivery information
    if (deliveryInfo.streetAddress.length < 2) {
      newErrors.streetAddress = "Street address must have at least 2 characters";
      valid = false;
    }

    if (deliveryInfo.city.length < 2) {
      newErrors.city = "City must have at least 2 characters";
      valid = false;
    }

    if (deliveryInfo.state.length < 2) {
      newErrors.state = "State must have at least 2 characters";
      valid = false;
    }

    if (deliveryInfo.zipCode.length !== 6) {
      newErrors.zipCode = "Zip code must be 6 digits";
      valid = false;
    }

    if (deliveryInfo.email.length !== 6) {
      newErrors.email = "email must be 6 digits";
      valid = false;
    }

    // Validation for payment information
    if (paymentInfo.nameOnCard.length < 2) {
      newErrors.nameOnCard = "Name must have at least 2 characters";
      valid = false;
    }

    if (paymentInfo.cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits";
      valid = false;
    }

    if (paymentInfo.securityCode.length < 3) {
      newErrors.securityCode = "Security code must have at least 3 digits";
      valid = false;
    }

    if (!/^\d{2}\/\d{2}$/.test(paymentInfo.expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="info-section">
        <h3>Delivery Information</h3>
        <input type="text" name="deliveryStreetAddress" value={formData.deliveryInfo.streetAddress} onChange={handleChange} placeholder="Street Address" />
        {errors.streetAddress && <p className="error">{errors.streetAddress}</p>}
        <input type="text" name="deliveryCity" value={formData.deliveryInfo.city} onChange={handleChange} placeholder="City" />
        {errors.city && <p className="error">{errors.city}</p>}
        <input type="text" name="deliveryState" value={formData.deliveryInfo.state} onChange={handleChange} placeholder="State" />
        {errors.state && <p className="error">{errors.state}</p>}
        <input type="text" name="deliveryZipCode" value={formData.deliveryInfo.zipCode} onChange={handleChange} placeholder="Zip Code" />
        {errors.zipCode && <p className="error">{errors.zipCode}</p>}
        <input type="text" name="deliveryZipEmail" value={formData.deliveryInfo.Email} onChange={handleChange} placeholder="Email" />
        {errors.Email && <p className="error">{errors.Email}</p>}
      </div>
      <div className="info-section">
        <h3>Payment Information</h3>
        <input type="text" name="paymentNameOnCard" value={formData.paymentInfo.nameOnCard} onChange={handleChange} placeholder="Name on Card" />
        {errors.nameOnCard && <p className="error">{errors.nameOnCard}</p>}
        <input type="text" name="paymentCardNumber" value={formData.paymentInfo.cardNumber} onChange={handleChange} placeholder="Card Number" />
        {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        <input type="text" name="paymentSecurityCode" value={formData.paymentInfo.securityCode} onChange={handleChange} placeholder="Security Code" />
        {errors.securityCode && <p className="error">{errors.securityCode}</p>}
        <input type="text" name="paymentExpiryDate" value={formData.paymentInfo.expiryDate} onChange={handleChange} placeholder="Expiry Date (MM/YY)" />
        {errors.expiryDate && <p className="error">{errors.expiryDate}</p>}
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  );
};

export default PaymentForm;