import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
import './Pant.css'; // Replace 'YourCSSFileName' with the actual name of your CSS file

function Pants() {
  const [pants, setPants] = useState([]);
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  useEffect(() => {
    fetch('http://127.0.0.1:5555/pants')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPants(data);
      });
  }, []);

  // const handleDeletePants = id => {
  //   console.log("Pants before deletion:", pants);
  //   fetch(`/pants/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(() => {
  //       setPants(pants.filter(pants => pants.id !== id));
  //       console.log("Pants after deletion:", pants);
  //     });
  // };

  const handleAddToCart = (pant) => {
    addToCart(pant); // Call addToCart function from CartContext
    console.log("Added to cart:", pant);
  };

  return (
    <div className="pant-container">
      <h2>Pants</h2>
      {pants.map(pant => (
        <div key={pant.id} className="card">
          <div className="card-image-container">
            <img src={pant.image_url} alt={pant.name} className="card-image" />
          </div >
          <div className="info-container">
          <div className="card-title">{pant.name}</div>
          <div className="card-des">{pant.description}</div>
          <div className="card-price">Price: ${pant.price}</div>
          {/* <button onClick={() => handleDeletePants(pants.id)}>Delete</button> */}
          <button onClick={() => handleAddToCart(pant)} className="add-to-cart-button">Add to Cart</button> {/* Add button to add pants to cart */}
        </div>
        </div>
      ))}
    </div>
  );
}

export default Pants;