// libraries
import React, { useContext } from "react";

//constants
import { eng_lang } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";

//styles
import "./index.scss";

const MintedSection = () => {
  const { totalMinted } = useContext(landinPageProps);
  return (
    <section id="minted">
      <div className="container-xl">
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
      </div>
    </section>
  );
};

export default MintedSection;
