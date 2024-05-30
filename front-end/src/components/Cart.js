// // import React, { useContext, useState } from 'react';
// // import { CartContext } from './CartContext';
// // import InfoPayment from './InfoPayment';
// // import Receipt from './Receipt';
// // import './Cart.css';

// // function Cart() {
// //   const { cart, removeFromCart } = useContext(CartContext);
// //   const [showPaymentForm, setShowPaymentForm] = useState(false);
// //   const [showReceipt, setShowReceipt] = useState(false);
// //   const [deliveryInfo, setDeliveryInfo] = useState({});
// //   const [paymentInfo, setPaymentInfo] = useState({});
// //   const [hideCart, setHideCart] = useState(false); // State to hide cart items

// //   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

// //   const handlePayNow = () => {
// //     if (cart.length > 0) {
// //       setShowPaymentForm(true);
// //       setHideCart(true); // Set hideCart to true when "Pay Now" is clicked
// //     } else {
// //       alert("Cart is empty");
// //     }
// //   };

// //   const handleSubmitPayment = (formData) => {
// //     setDeliveryInfo(formData.deliveryInfo);
// //     setPaymentInfo(formData.paymentInfo);
// //     setShowPaymentForm(false);
// //     setShowReceipt(true);
// //   };

// //   const handleCloseReceipt = () => {
// //     setShowReceipt(false);
// //   };

// //   return (
// //     <div className="cart-wrapper">
// //       <div className="cart-container">
// //         {!showPaymentForm && !showReceipt && ( // Render cart items only if neither payment form nor receipt is shown
// //           <>
// //             <h2>Cart</h2>
// //             <p>Total Price: ${totalPrice.toFixed(2)}</p>
// //             {!hideCart && ( // Conditionally render cart items based on hideCart state
// //               cart.map((item, index) => (
// //                 <div key={index} className="cart-item">
// //                   <div className="cart-item-image">
// //                     <img src={item.image_url} alt={item.name} />
// //                   </div>
// //                   <div className="cart-item-details">
// //                     <h3>{item.name}</h3>
// //                     <p>Price: ${item.price}</p>
// //                   </div>
// //                   <button className="Btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
// //                 </div>
// //               ))
// //             )}
// //             {!hideCart && cart.length > 0 && <button className="button" onClick={handlePayNow}>Pay Now</button>}
// //             {!hideCart && cart.length === 0 && <p>Cart is empty😥</p>} {/* Message for empty cart */}
// //           </>
// //         )}
// //         {showPaymentForm && <InfoPayment onSubmit={handleSubmitPayment} />}
// //         {showReceipt && <Receipt items={cart} deliveryInfo={deliveryInfo} paymentInfo={paymentInfo} onClose={handleCloseReceipt} />}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Cart;
// //



// // import React, { useContext, useState, useEffect } from 'react';
// // import { CartContext } from './CartContext';
// // import InfoPayment from './InfoPayment';
// // import Receipt from './Receipt';
// // import './Cart.css';

// // function Cart() {
// //   const { cart, removeFromCart } = useContext(CartContext);
// //   const [showPaymentForm, setShowPaymentForm] = useState(false);
// //   const [showReceipt, setShowReceipt] = useState(false);
// //   const [deliveryInfo, setDeliveryInfo] = useState({});
// //   const [paymentInfo, setPaymentInfo] = useState({});
// //   const [hideCart, setHideCart] = useState(false); // State to hide cart items
// //   const [cartItemCount, setCartItemCount] = useState(0); // State to track number of items in cart

// //   useEffect(() => {
// //     // Update cart item count whenever cart changes
// //     setCartItemCount(cart.length);
// //   }, [cart]);

// //   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

// //   const handlePayNow = () => {
// //     if (cart.length > 0) {
// //       setShowPaymentForm(true);
// //       setHideCart(true); // Set hideCart to true when "Pay Now" is clicked
// //     } else {
// //       alert("Cart is empty");
// //     }
// //   };

// //   const handleSubmitPayment = (formData) => {
// //     setDeliveryInfo(formData.deliveryInfo);
// //     setPaymentInfo(formData.paymentInfo);
// //     setShowPaymentForm(false);
// //     setShowReceipt(true);
// //   };

// //   const handleCloseReceipt = () => {
// //     setShowReceipt(false);
// //   };

// //   return (
// //     <div className="cart-wrapper">
// //       <div className="cart-container">
// //         {!showPaymentForm && !showReceipt && ( // Render cart items only if neither payment form nor receipt is shown
// //           <>
// //             <h2>Cart</h2>
// //             <p>Total Price: ${totalPrice.toFixed(2)}</p>
// //             {!hideCart && ( // Conditionally render cart items based on hideCart state
// //               cart.map((item, index) => (
// //                 <div key={index} className="cart-item">
// //                   <div className="cart-item-image">
// //                     <img src={item.image_url} alt={item.name} />
// //                   </div>
// //                   <div className="cart-item-details">
// //                     <h3>{item.name}</h3>
// //                     <p>Price: ${item.price}</p>
// //                   </div>
// //                   <button className="Btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
// //                 </div>
// //               ))
// //             )}
// //             {!hideCart && cart.length > 0 && <button className="button" onClick={handlePayNow}>Pay Now</button>}
// //             {!hideCart && cart.length === 0 && <p>Cart is empty😥</p>} {/* Message for empty cart */}
// //           </>
// //         )}
// //         {showPaymentForm && <InfoPayment onSubmit={handleSubmitPayment} />}
// //         {showReceipt && <Receipt items={cart} deliveryInfo={deliveryInfo} paymentInfo={paymentInfo} onClose={handleCloseReceipt} />}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Cart;
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
// The issue you're encountering is likely due to all your items having the same id. When you attempt to remove an item by its id, the filter operation removes all items with that id, resulting in all identical items being removed.

// To resolve this, ensure each item has a unique identifier. If each item of the same type (e.g., Adidas shoes) must be individually added to the cart, you can generate a unique id for each addition, even if they are the same type of item. Here’s how you can modify your code:

// Update the addToCart function to assign a unique id to each item when it is added.
// Ensure the removeFromCart function works with these unique ids.
// Here’s how you can modify your CartContext to generate unique ids:

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
                <div key={item.cartId} className="cart-item"> {/* Use cartId as key */}
                  <div className="cart-item-image">
                    <img src={item.image_url} alt={item.name} />
                  </div>
                  <div className="cart-item-details0">
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button className="Btn" onClick={() => removeFromCart(item.cartId)}>🗑️</button> {/* Use cartId for removal */}
                </div>
              ))
            )}
            {!hideCart && cart.length > 0 && <button className="button0" onClick={handlePayNow}>Pay Now</button>}
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