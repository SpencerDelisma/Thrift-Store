
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import { CartContext } from './CartContext'; // Import CartContext

function App() {
  const { cart } = useContext(CartContext); // Access cart state from CartContext

  return (
    <Router>
      <div className="app-container">
        <div className="logo-container left-logo">
          <img src={logo} alt="Logo" className="app-logo" /> {/* Left logo */}
        </div>
        <div className="logo-container right-logo">
          <img src={logo} alt="Logo" className="app-logo" /> {/* Right logo */}
        </div>
        <div className="led-light"></div>
        <div className="led-light left"></div> 
        <div className="led-light right"></div>
        <Navbar cartItemCount={cart.length} /> {/* Pass cartItemCount to Navbar */}
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tshirts" component={Tshirts} />
            <Route path="/hoodies" component={Hoodies} />
            <Route path="/shoe" component={Shoe} />
            <Route path="/pant" component={Pant} />
            <Route path="/about" component={About}/>
            <Route path="/cart" component={Cart}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;