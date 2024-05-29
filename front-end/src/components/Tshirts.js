// TShirts.js
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import './TShirts.css'; // Import CSS file for styling

function TShirts() {
  const { addToCart } = useContext(CartContext);
  const [tshirts, setTShirts] = useState([]);
  
  useEffect(() => {
    fetch('http://127.0.0.1:5555/tshirts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTShirts(data);
      });
  }, []);

  return (
    <div className="tshirt-container">
      {tshirts.map(tshirt => (
        <div key={tshirt.id} className="card"> {/* Apply the 'card' class */}
          <div className="card-image-container"> {/* Apply the 'card-image-container' class */}
            <img src={tshirt.image_url} alt={tshirt.name} className="image-icon tshirt-image" /> {/* Apply the 'image-icon' and 'tshirt-image' classes */}
          </div>
          <div className="info-container">
            <h3 className="card-title name">{tshirt.name}</h3> {/* Apply the 'card-title' class */}
            <p className="card-des description">{tshirt.description}</p> {/* Apply the 'card-des' class */}
            <p className="card-price price">${tshirt.price}</p> {/* Apply the 'card-price' class */}
            <button onClick={() => addToCart(tshirt)} className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TShirts;