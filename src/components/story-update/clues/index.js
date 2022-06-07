//libraries
import React from "react";

//styles
import "./index.scss";

//assets
import { HeroImg } from "../../../assets";

const StoryClues = () => {
  return (
    <div className="slider-section container">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-carousel="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p className="text-center">hi</p>
            <img src={HeroImg} alt="heroimg" />{" "}
          </div>
          <div class="carousel-item">
            <p>helo</p>
            <img src={HeroImg} alt="heroimg" />{" "}
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span>Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        Next
      </button>
    </div>
  );
};

export default StoryClues;
