//libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// components
import { BlockButton } from "../../commons";

// constants
import { eng_lang, routes } from "../../../lib/utills/constants";

//styles
import "./index.scss";

//assets
import { HeroImg } from "../../../assets";

const StoryClues = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(routes.CLAIM_ATTRIBUTE);
  };

  return (
    <div className="container-xl">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel__carousel-section"
        data-bs-ride="carousel"
        data-bs-wrap={false}
        data-bs-touch={true}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="text-center">
              {eng_lang.story_clues.paragrapgh_line_1}
              <br />
              {eng_lang.story_clues.paragrapgh_line_2}
            </p>
            <img
              src={HeroImg}
              className="d-block w-100 carousel__max-height"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <p className="text-center">
              {eng_lang.story_clues.paragrapgh_line_1}
              <br />
              {eng_lang.story_clues.paragrapgh_line_2}
            </p>
            <img
              src={HeroImg}
              className="d-block w-100 carousel__max-height"
              alt="..."
            />
          </div>
          <section className="d-flex justify-content-between carousel__spacing">
            <BlockButton
              showImg={false}
              text={"Previous"}
              imgPath={""}
              name={"previous"}
              handleClick={() => {}}
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
                handleClick={() => {}}
                secondary={false}
                data_bs_target="#carouselExampleControls"
                data_bs_slide="next"
              />
            </div>
            <div className="carousel__min-width d-none">
              <BlockButton
                showImg={false}
                text={"Claim Attributes"}
                imgPath={""}
                name={""}
                handleClick={handleNavigation}
                secondary={false}
                data_bs_target=""
                data_bs_slide=""
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StoryClues;
