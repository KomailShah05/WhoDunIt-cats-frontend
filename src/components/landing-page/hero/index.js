// libraries
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

//constants
import { eng_lang, routes } from "../../../lib/utills/constants";
import { showModalAction } from "../../../redux/actions/nfts";
import { landinPageProps } from "../../../pages/landing-page";

// styles
import "./index.scss";

//assets
import { Underline } from "../../../assets";

const HeroSection = () => {
  const dispatch = useDispatch();
  const { totalMinted, winner } = useContext(landinPageProps);
  // const url = window.location.pathname;

  const handleModalOpen = () => {
    dispatch(showModalAction("conncetToBuy"));
  };

  return (
    <div className="hero">
      <div className="container d-md-flex hero-content justify-content-lg-end justify-content-center  text-white">
        <div className={`hero-card ${winner?.success === true && "d-none"}`}>
          {totalMinted >= eng_lang.totalNoOfMintToken ? (
            <div className="story-release-heading">
              <h1>{eng_lang.storyRelease.heading}</h1>
              <img className="underline" src={Underline} alt="underline" />
            </div>
          ) : null}
          <p>{eng_lang.hero.card_text}</p>

          {totalMinted >= eng_lang.totalNoOfMintToken ? (
            <Link to={routes.STORY_INTRO}>
              <div className="btn-container position-relative mt-34">
                <span className="mas hero-mas">
                  {eng_lang.buttonConstants.begin_hunt}
                </span>
                <button
                  className="btn btn-primary hero-card-btn join_hunt_text"
                  data-mdb-ripple-color="primary"
                >
                  {eng_lang.buttonConstants.begin_hunt}
                </button>
              </div>
            </Link>
          ) : (
            <div className="btn-container position-relative mt-34">
              <span className="mas hero-mas">
                {eng_lang.buttonConstants.join_hunt_text}
              </span>
              <button
                className="btn btn-primary hero-card-btn join_hunt_text"
                data-mdb-ripple-color="primary"
                onClick={handleModalOpen}
              >
                {eng_lang.buttonConstants.join_hunt_text}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
