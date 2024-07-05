import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Comp/Nav";
import Footer from "./Comp/Footer.js";
import Home from "./Home/home.js";
import Academy from "./Academy/academy.js";
import Services from "./Services/services.js";
import Gallery from "./Gallery/gallery.js";
import Blog from "./Blog/blog.js";
import Profile from "./Profile/profile.js";
import About from "./About/about.js";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
