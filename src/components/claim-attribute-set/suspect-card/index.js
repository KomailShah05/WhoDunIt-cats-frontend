// libraries
import React from "react";

// styles
import "./style.scss";

// assets
import {
  // CatOnePng,
  CatTwoPng,
  CatThreePng,
  CatFourPng,
  CatFivePng,
} from "../../../assets";
import { eng_lang } from "../../../lib/utills/constants";

const Card = ({ suspectedCats }) => {
  const unavailable = true;
  return (
    <>
      {suspectedCats?.length > 0 &&
        suspectedCats?.map((cat, index) => (
          <div key={index} className="col-lg-4 col-md-6 card-size">
            <img src={cat?.imagePath} alt="cat" tabIndex="0" />
          </div>
        ))}

      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatTwoPng} alt="cat" tabIndex="0" />
      </div>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatThreePng} alt="cat" tabIndex="0" />
      </div>
      <div
        className={`col-lg-4 col-md-6 card-size  ${
          unavailable === true && "unavailable"
        }`}
      >
        <div className="unavailable-text">
          <p>Unavailable</p>
        </div>
        <img src={CatFourPng} alt="cat" tabIndex="0" />
        <div className="overlay-on-hover text-center">
          <p className="overlay-header">
            {eng_lang.claim_attribute_set.section_two.hover_heading}
          </p>
          <p className="overlay-description ">
            {eng_lang.claim_attribute_set.section_two.hover_descr_1} <br />{" "}
            {eng_lang.claim_attribute_set.section_two.hover_descr_2}
          </p>
          <button className="btn btn-primary opensea-btn me-1">
            {eng_lang.buttonConstants.view_on_open_sea}
          </button>
        </div>
      </div>
      <div
        className={`col-lg-4 col-md-6 card-size  ${
          unavailable === true && "unavailable"
        }`}
      >
        <div className="unavailable-text">
          <p>{eng_lang.claim_attribute_set.section_two.hover_heading}</p>
        </div>
        <img src={CatFivePng} alt="cat" tabIndex="0" />
        <div className="overlay-on-hover text-center">
          <p className="overlay-header">
            {eng_lang.claim_attribute_set.section_two.hover_heading}
          </p>
          <p className="overlay-description ">
            {eng_lang.claim_attribute_set.section_two.hover_descr_1} <br />{" "}
            {eng_lang.claim_attribute_set.section_two.hover_descr_2}
          </p>
          <button className=" btn btn-primary opensea-btn me-1">
            {eng_lang.buttonConstants.view_on_open_sea}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
