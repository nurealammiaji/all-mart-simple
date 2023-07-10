import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='nav-links'>
                <a href="./order">Order</a>
                <a href="./order-review">Order Review</a>
                <a href="./manage-inventory">Manage Inventory</a>
                <a href="./login">Login</a>
            </div>
        </div>
    );
};

export default Header;