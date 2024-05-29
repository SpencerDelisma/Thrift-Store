// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <div className="navbar">
//       <ul className="navbar-list">
//         <li><Link to="/" className="navbar-link">꧁<b>𝐇𝐨𝐦𝐞</b>꧂</Link></li>
//         <li><Link to="/tshirts" className="navbar-link">꧁<b>𝐓𝐬𝐡𝐢𝐫𝐭𝐬</b>꧂</Link></li>
//         <li><Link to="/hoodies" className="navbar-link">꧁<b>𝐇𝐨𝐨𝐝𝐢𝐞𝐬</b>꧂</Link></li>
//         <li><Link to="/shastar" className="navbar-link">꧁<b>𝐒𝐡𝐚𝐬𝐭𝐚𝐫</b>꧂</Link></li>
//         <li><Link to="/about" className="navbar-link">꧁<b>𝐀𝐛𝐨𝐮𝐭</b>꧂</Link></li>
//         <li><Link to="/cart" className="navbar-link">꧁<b>𝐂𝐚𝐫𝐭</b>꧂</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartItemCount }) {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link"><b>𝐇𝐨𝐦𝐞</b></Link></li>
        <li><Link to="/tshirts" className="navbar-link"><b>𝐓𝐬𝐡𝐢𝐫𝐭𝐬</b></Link></li>
        <li><Link to="/hoodies" className="navbar-link"><b>𝐇𝐨𝐨𝐝𝐢𝐞𝐬</b></Link></li>
        <li><Link to="/pants" className="navbar-link"><b>Pants</b></Link></li>
        <li><Link to="/shoes" className="navbar-link"><b>Shoes</b></Link></li>
        <li><Link to="/about" className="navbar-link"><b>𝐀𝐛𝐨𝐮𝐭</b></Link></li>
        <li>
          <Link to="/cart" className="navbar-link">
            <b>𝐂𝐚𝐫𝐭</b><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M4.697 12.901a.5.5 0 1 1-.727-.677l2.5-3a.5.5 0 0 1 .73-.002l2.5 2.25a.5.5 0 1 1-.596.804l-2.025-1.822-.774.775a.5.5 0 0 1-.705.008l-.705-.705a.5.5 0 0 1 .007-.707l3-3zm-3.612.449a.5.5 0 0 1-.069-.649L3.397 9H1.5a.5.5 0 0 1 0-1h2.57L5.158 4.43a.5.5 0 1 1 .765.642l-.384.512h6.614a.5.5 0 0 1 .09.992l-7-1a.5.5 0 0 1-.416-.483l-.5-3a.5.5 0 1 1 .992-.09l.438 2.63 6.196.885 1.753-2.338a.5.5 0 1 1 .766.642l-2 2.667a.5.5 0 0 1-.374.198l-6.5-.929z"/>
              <path d="M15.5 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3.5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM3 14a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1zm10 1a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1z"/>
            </svg> {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;