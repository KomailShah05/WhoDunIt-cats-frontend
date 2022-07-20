// libraries
import React, { useContext } from "react";
import { Parallax } from "react-parallax";

// components
// import WalkingCats from "../walking-cats";
import CrowdSimulator from "../crowd-simulator";

//constants
import { eng_lang } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";

//styles
import "./index.scss";

// Assets
import { pixelated_cat, border, minted_bg } from "../../../assets";

const MintedSection = () => {
  const { totalMinted, isWinner, winnerData } = useContext(landinPageProps);
  return (
    <>
      {isWinner === true && (
        <div className="position-relative overflow-visible ">
          <div className="winner-reveal ">
            <div className="d-flex flex-column align-items-center winner-content ">
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
              <div className="winner-profile">
                <img src={winnerData?.winner?.profile_img_url} alt="winner" />
              </div>
              <p className="winner-name">
                {winnerData?.winner?.user?.username !== null
                  ? winnerData?.winner?.user?.username
                  : "Unnamed"}
              </p>
              <div className="position-relative whodunit-btn-container">
                <span className="mas mas-whodunit">
                  {eng_lang.buttonConstants.who_dun_it}
                </span>
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
              className={`d-flex justify-content-center align-items-center w-100 mb-4em ${
                isWinner === true && "winner-mobile"
              } `}
            >
              <div className={`text-box ${isWinner === true && "d-none"}`}>
                <h2 className="text-white text-capitalize">
                  {eng_lang.mintedSection.total_Minted}
                </h2>
                <p data-testid="totalMinted" className="minted-text">
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
        {/* <WalkingCats /> */}
        <CrowdSimulator />
      </Parallax>
    </>
  );
};

export default MintedSection;
