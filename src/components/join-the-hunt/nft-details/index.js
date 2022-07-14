import React, { useContext } from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";

// assets

const NftDetails = () => {
  const { winner } = useContext(landinPageProps);
  return (
    <div className="row">
      <div className="col-md-5 scroll-modal__bg-img">
        <img src={winner?.killerCat?.imagePath} alt="brown_cat" />
      </div>
      <div className="col-md-7 ps-md-5">
        <h3 className="text-white">
          {winner?.killerCat?.plackNumber.toString().length === 5
            ? `Cat#${winner.killerCat.plackNumber}`
            : `Cat#${winner.killerCat.plackNumber}`}
        </h3>
        <div className="scroll-modal__body-margin">
          <div className="d-flex justify-content-between ">
            <p>{eng_lang.winnerRevealLandingPage.cat_name}</p>
            <h5 className="text-white">{winner?.killerCat?.skin}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.eye}</p>
            <h5 className="text-white">{winner?.killerCat?.eyes}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.skin}</p>
            <h5 className="text-white">{winner?.killerCat?.skin}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.height}</p>
            <h5 className="text-white">{winner?.killerCat?.height}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.hat}</p>
            <h5 className="text-white">{winner?.killerCat?.hats}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.shirt}</p>
            <h5 className="text-white">{winner?.killerCat?.shirts}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
