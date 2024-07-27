import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Comp/Nav";
import Footer from "./Comp/Footer.js";
import Home from "./Home/home.js";
import Learning from "./Learning/learning.js";
import Services from "./Services/services.js";
import GalleryAboutUs from "./Spotlight.js";
import Blog from "./Blog/blog.js";
// import About from "./About/about.js";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/spotlight" element={<GalleryAboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
