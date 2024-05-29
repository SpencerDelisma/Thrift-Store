import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Tshirts from './Tshirts';
import Hoodies from './Hoodies';
import Shoe from './Shoe';
import Pant from './Pant';
import About from './About';
import Cart from './Cart';
import logo from './assets/logo.png';
import './App.css';
import { CartContext } from './CartContext';

function App() {
  const { cart } = useContext(CartContext);

  return (
    <Router>
      <div className="app-container">
        <div className="logo-container left-logo">
          <img src={logo} alt="Logo" className="app-logo" />
        </div>
        <div className="logo-container right-logo">
          <img src={logo} alt="Logo" className="app-logo" />
        </div>
        <div className="led-light"></div>
        <div className="led-light left"></div>
        <div className="led-light right"></div>
        <Navbar cartItemCount={cart.length} />
        <div className="content-container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/hoodies" element={<Hoodies />} />
            <Route path="/shoes" element={<Shoe />} />
            <Route path="/pants" element={<Pant />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;