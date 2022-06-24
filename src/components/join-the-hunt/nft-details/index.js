import React from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// assets
import { group_1 } from "../../../assets";

const NftDetails = () => {
  return (
    <div className="row">
      <div className="col-md-5 scroll-modal__bg-img">
        <img src={group_1} alt="brown_cat" />
      </div>
      <div className="col-md-7 ps-md-5">
        <h3 className="text-white">
          {eng_lang.winnerRevealLandingPage.cat_no}
        </h3>
        <div className="scroll-modal__body-margin">
          <div className="d-flex justify-content-between ">
            <p>{eng_lang.winnerRevealLandingPage.cat_name}</p>
            <h5 className="text-white">Furry Cat</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.eye}</p>
            <h5 className="text-white">Brown</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.skin}</p>
            <h5 className="text-white">Skiny Brown</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.height}</p>
            <h5 className="text-white">1’10’</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.hat}</p>
            <h5 className="text-white">Nil</h5>
          </div>
          <div className="d-flex justify-content-between">
            <p>{eng_lang.winnerRevealLandingPage.shirt}</p>
            <h5 className="text-white">White</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
