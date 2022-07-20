import React, { useContext } from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";

// assets

const NftDetails = () => {
  const { winnerData } = useContext(landinPageProps);
  return (
    <div className="row">
      <div className="col-md-5 scroll-modal__bg-img">
        <img src={winnerData?.killerCat?.imagePath} alt="brown_cat" />
      </div>
      <div className="col-md-7 ps-md-5">
        <h3 className="text-white">{`Cat#${winnerData?.killerCat?.nft}`}</h3>
        <div className="scroll-modal__body-margin">
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.plack_number}</p>
            <h5 className="text-white">
              {" "}
              {winnerData?.killerCat?.plackNumber.toString().length === 6
                ? `${winnerData?.killerCat?.plackNumber}`
                : `0${winnerData?.killerCat?.plackNumber}`}
            </h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.skin}</p>
            <h5 className="text-white">{winnerData?.killerCat?.skin}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.eye}</p>
            <h5 className="text-white">{winnerData?.killerCat?.eyes}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.height}</p>
            <h5 className="text-white">{winnerData?.killerCat?.height}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.hat}</p>
            <h5 className="text-white">{winnerData?.killerCat?.hats}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.shirt}</p>
            <h5 className="text-white">{winnerData?.killerCat?.shirts}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
