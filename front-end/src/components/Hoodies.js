import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
import './Hoodies.css'; // Replace 'YourCSSFileName' with the actual name of your CSS file

function Hoodies() {
  const [hoodies, setHoodies] = useState([]);
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  useEffect(() => {
    fetch('http://127.0.0.1:5555/hoodies')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setHoodies(data);
      });
  }, []);


  const handleAddToCart = (hoodie) => {
    addToCart(hoodie); // Call addToCart function from CartContext
    console.log("Added to cart:", hoodie);
  };
  
  return (
    <div className="hoodie-container">
      {/* <h2>Hoodies</h2> */}
      {hoodies.map(hoodie => (
        <div key={hoodie.id} className="card1">
          <div className="card-image-container1">
            <img src={hoodie.image_url} alt={hoodie.name} className="card-image1" />
          </div>
          <div className="info-container1">
          <div className="card-title1">{hoodie.name}</div>
          <div className="card-des1">{hoodie.description}</div>
          <div className="card-price1">Price: ${hoodie.price}</div>
          {/* <button onClick={() => handleDeleteHoodie(hoodie.id)}>Delete</button> */}
          <button onClick={() => handleAddToCart(hoodie)} className="add-to-cart-button1">Add to Cart</button> {/* Add button to add hoodie to cart */}
        </div>
        </div>
      ))}
    </div>
  );
}

export default Hoodies;