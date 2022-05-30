// libraries
import React from "react";

//styles
import "./index.css";

const MintedSection = () => {
  return (
    <section id="minted">
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="text-box">
          <h2 className="text-white text-capitalize">total minted</h2>
          <p className="minted-text">
            3016 <br />
            <span className="remaining-minted">of 5000</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MintedSection;
