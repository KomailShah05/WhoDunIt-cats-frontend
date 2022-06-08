//libraries
import React from "react";

//styles
import "./index.scss";

//assets
import { HeroImg } from "../../../assets";

const StoryClues = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide carousel__carousel-section"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h5 className="text-center text-white">Hello komail</h5>
          <img src={HeroImg} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <h5 className="text-center text-white">Hello komail</h5>

          <img src={HeroImg} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <h5 className="text-center text-white">Hello komail</h5>

          <img src={HeroImg} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span> */}
        <button aria-hidden="true">Previous</button>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span> */}
        <button aria-hidden="true">Next</button>
      </button>
    </div>
  );
};

export default StoryClues;
