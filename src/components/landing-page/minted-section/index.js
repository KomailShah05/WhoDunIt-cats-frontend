// libraries
import React, { useContext } from "react";

//constants
import { eng_lang, routes } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";

//styles
import "./index.scss";

const MintedSection = () => {
  const { totalMinted } = useContext(landinPageProps);
  const url = window.location.pathname;
  return (
    <section id="minted">
      <div className="container-xl">
        <div className="d-flex justify-content-center align-items-center w-100">
          <div
            className={`text-box ${url === routes.WINNER_REVEAL && "d-none"}`}
          >
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
          {url === routes.WINNER_REVEAL && (
            <>
              <div className="winner-reveal">
                <div className="d-flex flex-column align-items-center">
                  <h2 className="solved-heading">
                    {eng_lang.winnerRevealLandingPage.heading}
                  </h2>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MintedSection;
