// libraries
import React from "react";

// styles
import "./style.scss";

// assets
import { CatOne, CatTwo, CatThree, CatFour, CatFive } from "../../../assets";
import { eng_lang } from "../../../lib/utills/constants";

const Card = () => {
  const available = true;
  return (
    <>
      <div className="col-lg-4 col-md-6 card-size skeleton">
        <img src={CatOne} alt="cat" tabIndex="0" />
      </div>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatTwo} alt="cat" tabIndex="0" />
      </div>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatThree} alt="cat" tabIndex="0" />
      </div>
      <div
        className={`col-lg-4 col-md-6 card-size ${
          available === true && "unavailable"
        }`}
      >
        <div className="unavailable-text">
          <p>Unavailable</p>
        </div>
        <img src={CatFour} alt="cat" tabIndex="0" />
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
        className={`col-lg-4 col-md-6 card-size ${
          available === true && "unavailable"
        }`}
      >
        <div className="unavailable-text">
          <p>{eng_lang.claim_attribute_set.section_two.hover_heading}</p>
        </div>
        <img src={CatFive} alt="cat" tabIndex="0" />
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
