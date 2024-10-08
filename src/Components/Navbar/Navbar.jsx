import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <Link to="/">sarmittal</Link>
      </div>
      <div className="right-navbar">
        <Link to="projects">work</Link>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;