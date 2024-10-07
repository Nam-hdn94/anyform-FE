import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Company Logo</div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/pending">Pending Items</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
      <div className="user-icon">User Icon</div>
    </nav>
  );
};

export default Navbar;
