// libraries
import React from "react";

//styles
import "./index.css";

const MintedSection = () => {
  return (
    <section id="minted">
      <div className="container d-flex justify-content-around">
        <h2 className="text-white total-minted text-capitalize">
          total minted
        </h2>
        <p className=" minted align-self-end">
          3016 <br />
          <span className="remaining-minted">of 5000</span>
        </p>
      </div>
    </section>
  );
};

export default MintedSection;
