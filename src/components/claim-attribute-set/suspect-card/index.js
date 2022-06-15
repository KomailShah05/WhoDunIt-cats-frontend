// libraries
import React from "react";

// styles
import "./style.scss";

// assets
import { CatOne, CatTwo, CatThree, CatFour, CatFive } from "../../../assets";

const Card = () => {
  const available = true;
  return (
    <>
      <div className="col-lg-4 col-md-6 card-size">
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
          {" "}
          <p>Unavailable</p>
        </div>

        <img src={CatFour} alt="cat" tabIndex="0" />
      </div>
      <div
        className={`col-lg-4 col-md-6 card-size ${
          available === true && "unavailable"
        }`}
      >
        <div className="unavailable-text">
          {" "}
          <p>Unavailable</p>
          <div className="overlay-on-hover text-center">
            <p className="overlay-header">Unavailable</p>
            <p className="overlay-description ">
              If you want to see who purchase it
            </p>
            <button className="w-100 btn btn-primary opensea-btn">
              View on opensea
            </button>
          </div>
        </div>
        <img src={CatFive} alt="cat" tabIndex="0" />
      </div>
    </>
  );
};

export default Card;
