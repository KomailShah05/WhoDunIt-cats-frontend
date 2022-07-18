// libraries
import React, { useContext } from "react";
import { Parallax } from "react-parallax";

// components
import WalkingCats from "../walking-cats";

//constants
import { eng_lang } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";

//styles
import "./index.scss";

// Assets
import {
  pixelated_cat,
  border,
  winner_avatar,
  minted_bg,
} from "../../../assets";

const MintedSection = () => {
  const { totalMinted, isWinner } = useContext(landinPageProps);
  // const url = window.location.pathname;
  return (
    <>
      {isWinner === true && (
        <div className="position-relative overflow-visible ">
          <div className="winner-reveal ">
            <div className="d-flex flex-column align-items-center winner-content">
              <h2 className="solved-heading">
                {eng_lang.winnerRevealLandingPage.heading}
              </h2>
              <img
                className="blur-cat-pos"
                src={pixelated_cat}
                alt="pixelated cat"
              />
              <img src={border} alt="border" className="border" />
              <h3 className="detective-heading">
                {eng_lang.winnerRevealLandingPage.case_detective}
              </h3>
              <img
                src={winner_avatar}
                alt="winner"
                className="winner-profile"
              />
              <p className="winner-name">
                {eng_lang.winnerRevealLandingPage.winner_name}
              </p>
              <button
                className="btn whodunit-btn"
                data-bs-toggle="modal"
                data-bs-target="#scrollModal"
                data-bs-dismiss="modal"
              >
                {eng_lang.buttonConstants.who_dun_it}
              </button>
            </div>
          </div>
        </div>
      )}
      <Parallax bgImage={minted_bg} strength={300}>
        <div
          id="minted"
          className={`${
            isWinner === true && "minted-section-winner flex-column"
          }`}
        >
          <div className="container-xl">
            <div
              className={`d-flex justify-content-center align-items-center w-100 ${
                isWinner === true && "winner-mobile"
              } `}
            >
              <div className={`text-box ${isWinner === true && "d-none"}`}>
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
        </div>
        <WalkingCats />
      </Parallax>
    </>
  );
};

export default MintedSection;
