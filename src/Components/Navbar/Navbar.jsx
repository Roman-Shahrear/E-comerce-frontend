import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');

  const handleMenuClick = (selectMenu) => {
    setMenu(selectMenu);
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => handleMenuClick('shop')}>
          <Link style={{textDecoration: "none"}} to="/">Shop</Link>{menu === 'shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick('mens')}>
          <Link style={{textDecoration: "none"}} to="/mens">Men</Link>{menu === 'mens' ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick('womens')}>
          <Link style={{textDecoration: "none"}} to="/womens">Women</Link>{menu === 'womens' ? <hr /> : <></>}
        </li>
        <li onClick={() => handleMenuClick('kids')}>
          <Link style={{textDecoration: "none"}} to="/kids">Kids</Link>{menu === 'kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{textDecoration: "none"}} to="/login"><button>Login</button></Link>
        <Link style={{textDecoration: "none"}} to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
