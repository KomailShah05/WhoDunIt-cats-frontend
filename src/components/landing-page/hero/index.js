// libraries
import React from "react";

// styles
import "./index.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container d-md-flex hero-content justify-content-end  text-white">
        <div className="hero-card">
          <p>
            Suscipit sem dolor id adipiscing tincidunt parturient. Vitae,
            sagittis a, justo, pellentesque diam. Malesuada ullamcorper et ut
            quis donec eget tellus ac nec.
          </p>
          <button className="btn hero-card-btn">Join the hunt</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
