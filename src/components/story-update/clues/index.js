//libraries
import React from "react";

// components
import { BlockButton } from "../../commons";

// constants
import { eng_lang } from "../../../lib/utills/constants";

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
      data-bs-wrap={false}
      data-bs-touch={true}
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <p className="text-center">
            {eng_lang.story_clues.paragrapgh_line_1}
            <br />
            {eng_lang.story_clues.paragrapgh_line_2}
          </p>
          <img src={HeroImg} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <p className="text-center">
            {eng_lang.story_clues.paragrapgh_line_1}
            <br />
            {eng_lang.story_clues.paragrapgh_line_2}
          </p>
          <img src={HeroImg} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <p className="text-center">
            {eng_lang.story_clues.paragrapgh_line_1}
            <br />
            {eng_lang.story_clues.paragrapgh_line_2}
          </p>
          <img src={HeroImg} class="d-block w-100" alt="..." />
        </div>
      </div>
      <div className="d-flex justify-content-between carousel__spacing">
        <BlockButton
          showImg={false}
          text={"Previous"}
          imgPath={""}
          name={"previous"}
          handleModalName={""}
          transparent_btn={true}
          data_bs_target="#carouselExampleControls"
          data_bs_slide="prev"
        />
        <div className="carousel__min-width">
          <BlockButton
            showImg={false}
            text={"Next"}
            imgPath={""}
            name={"next"}
            handleModalName={""}
            secondary={false}
            data_bs_target="#carouselExampleControls"
            data_bs_slide="next"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryClues;
