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
          <Link to="/learning" data-item="Learning Hub">
            Learning
          </Link>
        </li>
        <li>
          <Link to="/services" data-item="Services">
            Services
          </Link>
        </li>

        <li>
          <Link to="/spotlight" data-item="Explore Us">
            EXPLORE
          </Link>
        </li>

        <li>
          <Link to="/blog" data-item="Blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
