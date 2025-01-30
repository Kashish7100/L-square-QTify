import React from "react";
import LogoImage from "../../assests/logo.png";
import Button from "../Button/Button";
import "./Navbar.css";
import Search from "../Search/Search";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h2 className="logo">🎧 tify</h2> */}
      <img src={LogoImage} alt="Headphones Icon" />
      {/* <input type="text" placeholder="Search a album of your choice" className="search-bar" /> */}
      <Search searchData={[]} placeholder="Search albums..." />
      <Button text="Give Feedback" onClick={() => alert("Feedback Clicked!")} />
      {/* <button className="feedback-btn">Give Feedback</button> */}
    </nav>
  );
};

export default Navbar;
