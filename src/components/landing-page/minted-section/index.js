// libraries
import React from "react";

//constants
import { eng_lang } from "../../../lib/utills/constants";

//styles
import "./index.scss";

const MintedSection = ({ totalMinted }) => {
  return (
    <section id="minted">
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="text-box">
          <h2 className="text-white text-capitalize">
            {eng_lang.mintedSection.total_Minted}
          </h2>
          <p className="minted-text">
            {totalMinted || 0}
            <br />
            <span className="remaining-minted">
              {`${eng_lang.mintedSection.of} ${eng_lang.mintedSection.remaining_minted}`}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MintedSection;
