import React from 'react';

import './Receipt.css';

function Receipt({ items, deliveryInfo, paymentInfo, onClose }) {
  //const { nameOnCard, cardNumber, securityCode, expiryDate } = paymentInfo;
  const { nameOnCard, cardNumber, expiryDate } = paymentInfo;

  // Generate receipt number (you can use any method to generate a unique receipt number)
  const receiptNumber = Math.floor(Math.random() * 1000000); // Example: Generates a random 6-digit receipt number

  // Format the card number to show only the last four digits and mask the rest
  const formattedCardNumber = `XXXX XXXX XXXX ${cardNumber.slice(-4)}`;

  // Mask the security code
  const maskedSecurityCode = 'XXX';

  // Get current date and time
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const handleClose = () => {
    onClose();
    window.location.reload(); // Reload the page
  };

  return (
    <div className="receipt-container">
      <h2><u>Receipt</u></h2>
      <div className="receipt-details">
        <h3>Receipt Number: #{receiptNumber}</h3>
        <p>Date: {currentDate}</p>
        <p>Time: {currentTime}</p>
      </div>
      <div className="receipt-details">
        <h3>Delivery Information</h3>
        <p>Street Address: {deliveryInfo.streetAddress}</p>
        <p>City: {deliveryInfo.city}</p>
        <p>State: {deliveryInfo.state}</p>
        <p>Zip Code: {deliveryInfo.zipCode}</p>
      </div>
      <div className="receipt-details">
        <h3>Payment Information</h3>
        <p>Name on Card: {nameOnCard}</p>
        <p>Card Number: {formattedCardNumber}</p>
        <p>Security Code: {maskedSecurityCode}</p>
        <p>Expiry Date: {expiryDate}</p>
      </div>
      <div>
       <h5><u>You'll soon receive an email confirming your purchase details.</u></h5>

        <h5>*You can expect your package to arrive within 5-10 business days.<br></br> *For any inquiries regarding your delivery, please reach out to us using <br></br>*the contact information provided below. We will respond to your queries <br></br>*as promptly as possible.<br></br>Thank you for your purchase.</h5>
        <h6><u>Contact Information:<br></br>Email:delispence7@gmail.com<br></br>Phone: 1-646-944-7568</u></h6>
      </div>
      <button onClick={handleClose}>Close Receipt</button>
    </div>
  );
}

export default Receipt;