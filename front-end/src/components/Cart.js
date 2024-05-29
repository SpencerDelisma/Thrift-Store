// import React, { useContext, useState } from 'react';
// import { CartContext } from './CartContext';
// import InfoPayment from './InfoPayment';
// import Receipt from './Receipt';
// import './Cart.css';

// function Cart() {
//   const { cart, removeFromCart } = useContext(CartContext);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [deliveryInfo, setDeliveryInfo] = useState({});
//   const [paymentInfo, setPaymentInfo] = useState({});
//   const [hideCart, setHideCart] = useState(false); // State to hide cart items

//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

//   const handlePayNow = () => {
//     if (cart.length > 0) {
//       setShowPaymentForm(true);
//       setHideCart(true); // Set hideCart to true when "Pay Now" is clicked
//     } else {
//       alert("Cart is empty");
//     }
//   };

//   const handleSubmitPayment = (formData) => {
//     setDeliveryInfo(formData.deliveryInfo);
//     setPaymentInfo(formData.paymentInfo);
//     setShowPaymentForm(false);
//     setShowReceipt(true);
//   };

//   const handleCloseReceipt = () => {
//     setShowReceipt(false);
//   };

//   return (
//     <div className="cart-wrapper">
//       <div className="cart-container">
//         {!showPaymentForm && !showReceipt && ( // Render cart items only if neither payment form nor receipt is shown
//           <>
//             <h2>Cart</h2>
//             <p>Total Price: ${totalPrice.toFixed(2)}</p>
//             {!hideCart && ( // Conditionally render cart items based on hideCart state
//               cart.map((item, index) => (
//                 <div key={index} className="cart-item">
//                   <div className="cart-item-image">
//                     <img src={item.image_url} alt={item.name} />
//                   </div>
//                   <div className="cart-item-details">
//                     <h3>{item.name}</h3>
//                     <p>Price: ${item.price}</p>
//                   </div>
//                   <button className="Btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
//                 </div>
//               ))
//             )}
//             {!hideCart && cart.length > 0 && <button className="button" onClick={handlePayNow}>Pay Now</button>}
//             {!hideCart && cart.length === 0 && <p>Cart is empty😥</p>} {/* Message for empty cart */}
//           </>
//         )}
//         {showPaymentForm && <InfoPayment onSubmit={handleSubmitPayment} />}
//         {showReceipt && <Receipt items={cart} deliveryInfo={deliveryInfo} paymentInfo={paymentInfo} onClose={handleCloseReceipt} />}
//       </div>
//     </div>
//   );
// }

// export default Cart;
//



// import React, { useContext, useState, useEffect } from 'react';
// import { CartContext } from './CartContext';
// import InfoPayment from './InfoPayment';
// import Receipt from './Receipt';
// import './Cart.css';

// function Cart() {
//   const { cart, removeFromCart } = useContext(CartContext);
//   const [showPaymentForm, setShowPaymentForm] = useState(false);
//   const [showReceipt, setShowReceipt] = useState(false);
//   const [deliveryInfo, setDeliveryInfo] = useState({});
//   const [paymentInfo, setPaymentInfo] = useState({});
//   const [hideCart, setHideCart] = useState(false); // State to hide cart items
//   const [cartItemCount, setCartItemCount] = useState(0); // State to track number of items in cart

//   useEffect(() => {
//     // Update cart item count whenever cart changes
//     setCartItemCount(cart.length);
//   }, [cart]);

//   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

//   const handlePayNow = () => {
//     if (cart.length > 0) {
//       setShowPaymentForm(true);
//       setHideCart(true); // Set hideCart to true when "Pay Now" is clicked
//     } else {
//       alert("Cart is empty");
//     }
//   };

//   const handleSubmitPayment = (formData) => {
//     setDeliveryInfo(formData.deliveryInfo);
//     setPaymentInfo(formData.paymentInfo);
//     setShowPaymentForm(false);
//     setShowReceipt(true);
//   };

//   const handleCloseReceipt = () => {
//     setShowReceipt(false);
//   };

//   return (
//     <div className="cart-wrapper">
//       <div className="cart-container">
//         {!showPaymentForm && !showReceipt && ( // Render cart items only if neither payment form nor receipt is shown
//           <>
//             <h2>Cart</h2>
//             <p>Total Price: ${totalPrice.toFixed(2)}</p>
//             {!hideCart && ( // Conditionally render cart items based on hideCart state
//               cart.map((item, index) => (
//                 <div key={index} className="cart-item">
//                   <div className="cart-item-image">
//                     <img src={item.image_url} alt={item.name} />
//                   </div>
//                   <div className="cart-item-details">
//                     <h3>{item.name}</h3>
//                     <p>Price: ${item.price}</p>
//                   </div>
//                   <button className="Btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
//                 </div>
//               ))
//             )}
//             {!hideCart && cart.length > 0 && <button className="button" onClick={handlePayNow}>Pay Now</button>}
//             {!hideCart && cart.length === 0 && <p>Cart is empty😥</p>} {/* Message for empty cart */}
//           </>
//         )}
//         {showPaymentForm && <InfoPayment onSubmit={handleSubmitPayment} />}
//         {showReceipt && <Receipt items={cart} deliveryInfo={deliveryInfo} paymentInfo={paymentInfo} onClose={handleCloseReceipt} />}
//       </div>
//     </div>
//   );
// }

// export default Cart;
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import InfoPayment from './InfoPayment';
import Receipt from './Receipt';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const [hideCart, setHideCart] = useState(false); // State to hide cart items

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handlePayNow = () => {
    if (cart.length > 0) {
      setShowPaymentForm(true);
      setHideCart(true); // Set hideCart to true when "Pay Now" is clicked
    } else {
      alert("Cart is empty");
    }
  };

  const handleSubmitPayment = (formData) => {
    setDeliveryInfo(formData.deliveryInfo);
    setPaymentInfo(formData.paymentInfo);
    setShowPaymentForm(false);
    setShowReceipt(true);
  };

  const handleCloseReceipt = () => {
    setShowReceipt(false);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        {!showPaymentForm && !showReceipt && ( // Render cart items only if neither payment form nor receipt is shown
          <>
            <h2>Cart</h2>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            {!hideCart && ( // Conditionally render cart items based on hideCart state
              cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image_url} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button className="Btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              ))
            )}
            {!hideCart && cart.length > 0 && <button className="button" onClick={handlePayNow}>Pay Now</button>}
            {!hideCart && cart.length === 0 && <p>Cart is empty😥</p>} {/* Message for empty cart */}
          </>
        )}
        {showPaymentForm && <InfoPayment onSubmit={handleSubmitPayment} />}
        {showReceipt && <Receipt items={cart} deliveryInfo={deliveryInfo} paymentInfo={paymentInfo} onClose={handleCloseReceipt} />}
      </div>
    </div>
  );
}

export default Cart;