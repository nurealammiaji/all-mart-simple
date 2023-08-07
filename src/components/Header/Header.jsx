import './Header.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav-bar'>
            <div className='nav-logo'>
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className='nav-link'>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;