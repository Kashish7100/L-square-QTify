import React from "react";
import LogoImage from "../../assests/hero_headphones.png";
import "./Hero.css";

const Hero = () => {
  return (
    // <div className="hero">
    //   <h1>100 Thousand Songs, ad-free</h1>
    //   <h1>Over thousands podcast episodes</h1>
    //   <img src={LogoImage} alt="Headphones Icon" />
    // </div>
    <div className="hero">
    <div className="hero-content"> {/* Container for text */}
      <h1>100 Thousand Songs, ad-free</h1>
      <h1>Over thousands podcast episodes</h1>
    </div>
    <img src={LogoImage} alt="Headphones Icon" className="hero-image"/>
    </div>
  );
};

export default Hero;
