import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
import './Shoe.css'; // Replace 'YourCSSFileName' with the actual name of your CSS file

function Shoes() {
  const [shoes, setShoes] = useState([]);
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext

  useEffect(() => {
    fetch('http://127.0.0.1:5555/shoes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setShoes(data);
      });
  }, []);

  // const handleDeleteShoes = id => {
  //   console.log("Shoes before deletion:", shoes);
  //   fetch(`/shoes/${id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(() => {
  //       setShoes(shoes.filter(shoes => shoes.id !== id));
  //       console.log("Shoes after deletion:", shoes);
  //     });
  // };

  const handleAddToCart = (shoe) => {
    addToCart(shoe); // Call addToCart function from CartContext
    console.log("Added to cart:", shoe);
  };

  return (
    <div className="shoes-container22">
      <h2>Shoes</h2>
      {shoes.map(shoe => (
        <div key={shoe.id} className="card22">
          <div className="card-image-container22">
            <img src={shoe.image_url} alt={shoe.name} className="card-image22" />
          </div >
          <div className="info-container22">
          <div className="card-title22">{shoe.name}</div>
          <div className="card-des22">{shoe.description}</div>
          <div className="card-price22">Price: ${shoe.price}</div>
          {/* <button onClick={() => handleDeleteShoes(shoes.id)}>Delete</button> */}
          <button onClick={() => handleAddToCart(shoe)} className="add-to-cart-button22">Add to Cart</button> {/* Add button to add shoes to cart */}
        </div>
        </div>
      ))}
    </div>
  );
}
export default Shoes;