// src/components/Header.jsx
import React from 'react';
import Navigation from './Navigation'; // Make sure to import your Navigation component

function Header() {
  return (
    <header className="hero is-primary">
      <div className="hero-body">
        <h1 className="title">Welcome to My Portfolio</h1>
      </div>
    </header>
  );
}

export default Header;
