import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Virtual Market
        </Link>
        <div className="navbar-buttons">
          {isLoggedIn ? (
            <button className="navbar-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="navbar-button">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
