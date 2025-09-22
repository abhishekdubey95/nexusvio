import React, { useState } from 'react';
import './App.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar fujitsu-navbar">
      <div className="navbar-logo">
        <div className="logo-symbol">∞</div>
        <div className="logo-text">NEXUSVIO</div>
      </div>

      {/* Desktop menu */}
      <ul className="navbar-menu desktop-only">
        <li><a href="#highlights">Nexusvio Highlights</a></li>
        <li><a href="#products">Products Offered</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Our Client</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger (mobile only) */}
      <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {open && (
        <>
          <div className="drawer-overlay" onClick={close} />
          <aside className="mobile-drawer">
            <div className="drawer-header">
              <div className="drawer-title">NEXUSVIO</div>
              <button className="drawer-close" aria-label="Close" onClick={close}>×</button>
            </div>
            <ul className="drawer-menu" onClick={close}>
              <li><a href="#products">Products Offered</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </aside>
        </>
      )}
    </nav>
  );
};

export default Navbar;
