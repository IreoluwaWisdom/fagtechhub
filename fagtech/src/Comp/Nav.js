import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className="menuItems">
        <li>
          <Link to="/" data-item="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/academy" data-item="Academy">
            Academy
          </Link>
        </li>
        <li>
          <Link to="/services" data-item="Services">
            Services
          </Link>
        </li>
        <li>
          <Link to="/blog" data-item="Blog">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/profile" data-item="Profile">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/about" data-item="About">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
