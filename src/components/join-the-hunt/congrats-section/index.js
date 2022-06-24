import React from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./style.scss";

// assets
import { avatar } from "../../../assets";

const CongratSection = () => {
  return (
    <div className="congrats congrats__bg">
      <h3 className="text-white">{eng_lang.winnerRevealLandingPage.congrat}</h3>
      <img src={avatar} alt="avatar" />
      <h6 className="text-white inter">
        {eng_lang.winnerRevealLandingPage.worldWide}
      </h6>
      <p>
        {eng_lang.winnerRevealLandingPage.mystery_text}
        <span className="text-white">
          {" "}
          {eng_lang.dollar}100,000 {eng_lang.usd}
        </span>{" "}
        {eng_lang.winnerRevealLandingPage.bounty}
      </p>
    </div>
  );
};

export default CongratSection;
