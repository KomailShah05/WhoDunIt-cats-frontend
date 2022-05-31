// libraries
import React from "react";

//constants
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./index.scss";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container d-md-flex hero-content justify-content-end  text-white">
        <div className="hero-card">
          <p>{eng_lang.hero.card_text}</p>
          <button className="btn hero-card-btn">
            {eng_lang.buttonConstants.join_hunt_text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
