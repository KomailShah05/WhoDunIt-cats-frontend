import React, { useContext } from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";

// styles
import "./style.scss";

// assets

const CongratSection = () => {
  const { winnerData } = useContext(landinPageProps);
  return (
    <div className="congrats congrats__bg">
      <h3 className="text-white congrats-text">
        {eng_lang.winnerRevealLandingPage.congrat}
      </h3>
      <div className="winner-profile-modal">
        <img src={winnerData?.winner?.profile_img_url} alt="avatar" />
      </div>
      <h6 className="text-white inter winner">
        {winnerData?.winner?.user?.username !== null
          ? winnerData?.winner?.user?.username
          : "Unnamed"}
      </h6>
      <p className="mystery-solve-text">
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
