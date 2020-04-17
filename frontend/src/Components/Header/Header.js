// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <Router>
        <Link to={'/home'}>
          <p>Home</p>
        </Link>
        <Link to={'/create-new'}>
          <p id={'create'}>Create</p>
        </Link>
        <Link to={'/about'}>
          <p>About</p>
        </Link>
      </Router>
    </header>
  );
};

export default Header;
