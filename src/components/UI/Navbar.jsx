import { useState } from "react";

export default function Nav({ links }) {

  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{backgroundColor: '#F0DCCA'}}>
      <div className="navbar-brand">
        <a href="/">
          <img src="../../../images\HoneyBuzz94 Logo (small).png" width="100" />
        </a>
        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="main-navbar"
          onClick={handleActive}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="main-navbar" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <h1 className="navbar-item is-size-1 has-text-weight-bold is-hidden-touch">
          Sam Grow
        </h1>
        <div className="navbar-start"></div>
        <div className="navbar-end">{links.map((link) => link)}</div>
      </div>
    </nav>
  );
}
