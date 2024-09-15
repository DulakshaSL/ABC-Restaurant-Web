// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Header.css';
import companylogoImage from '../assets/images/companylogo.png';
import searchImage from '../assets/images/search.png';
import userImage from '../assets/images/account.png';
import cartImage from '../assets/images/shopping-bag.png';
import wishlistImage from '../assets/images/love.png';
import gemImage from '../assets/images/gem.png';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { cart, clearCart } = useCart();
  const { user, handleLogout } = useUser();
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate(); 
  
  const calculateSubtotal = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(total);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    calculateSubtotal();
  }, [cart]); // Recalculate subtotal whenever cart changes

  return (
    <header>
      <div id="overlay"></div>
      <div className="top-row">
        <div className="logo-container">
          <Link to="/">
            <img src={companylogoImage} alt="Signature Cuisine Logo" className="logoicon" />
          </Link>
          <div id="logo">ABC Restaurant Dashboard</div>
        </div>

        <nav>
         
          <ul id="navList">
            
           

            <li className="account-dropdown">
              <a href="#" onClick={toggleDropdown}>
                <img src={userImage} alt="User Account" className="login-icon" />
              </a>
              <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`} id="dropdownMenu">
                {user ? (
                  <>
                    <Link to="/dashboard">Profile</Link>
                    <Link to="#" onClick={handleLogout}>Logout</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                  </>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom-section">
      <nav>
      <ul>
        <li className="nav-item">
          <NavLink exact to="/addproduct" activeClassName="active" className="nav-link">
            Add Product
          </NavLink>
        </li>

       
        

      </ul>
    </nav>
      </div>
    </header>
  );
};


export default Header;