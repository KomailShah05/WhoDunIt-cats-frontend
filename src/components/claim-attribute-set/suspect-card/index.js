// libraries
import React from "react";

// styles
import "./style.scss";

// assets
import { CatOne, CatTwo, CatThree } from "../../../assets";

const Card = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatOne} alt="cat" />
      </div>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatTwo} alt="cat" />
      </div>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatThree} alt="cat" />
      </div>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatOne} alt="cat" />
      </div>
      <div className="col-lg-4 col-md-6 card-size">
        <img src={CatTwo} alt="cat" />
      </div>
    </>
  );
};

export default Card;
