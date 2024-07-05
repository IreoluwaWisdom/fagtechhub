import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="grid-item">
          <div>Description</div>
          <span>Insert description content here.</span>
        </div>
        <div className="grid-item">
          <div>Explore</div>
          <span>CAC Registration</span> <br />
          <span>Digital Marketing</span>
          <br />
          <span>Mentorship and Training</span>
          <br />
          <span>Branding and Design</span>
        </div>
        <div className="grid-item">
          <div>Quick Links</div>
          <ul>
            <li>
              <Link>FAQs</Link>
            </li>
            <li>
              <Link>Academy</Link>
            </li>
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <Link>News & Blog</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
          </ul>
        </div>
        <div className="grid-item">
          <div>Legal</div>
          <span>Privacy</span>
          <br />
          <span>Terms</span>
        </div>
        <div className="grid-item empty-grid"></div>
      </div>
      <div style={{ margin: "2vh", fontSize: "90%" }}>
        Copyright 2024 FagtechHub. All Rights Reserved{" "}
      </div>
    </footer>
  );
};

export default Footer;
