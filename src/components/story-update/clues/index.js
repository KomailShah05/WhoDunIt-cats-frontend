//libraries
import React, { useState, useRef, useEffect } from "react";
import $ from "jquery";

// components
import { BlockButton } from "../../commons";

// constants
import { eng_lang } from "../../../lib/utills/constants";

//styles
import "./index.scss";

//assets
import { HeroImg } from "../../../assets";

const StoryClues = () => {
  const [hide, sethide] = useState(false);
  const lastItem = useRef();
  const [updateDom, setupdateDom] = useState(0);

  // if ($(".carousel .carousel-inner .carousel-item:last").hasClass("active")) {
  // $(".btn-nxt").hide();
  // alert();
  // $("#carouselExampleControls").carousel("pause");
  // alert();
  // sethide(true);
  // } else {
  // sethide(false);
  // }

  useEffect(() => {
    const class_name = lastItem?.current?.classList[1];
    if (class_name === "active") {
      // alert();
      sethide(true);
    } else {
      sethide(false);
    }
  }, [updateDom]);

  console.log("hide****", hide);

  const handleNext = () => {
    setupdateDom(updateDom + 2);
  };

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
          <img
            src={HeroImg}
            class="d-block w-100 carousel__max-height"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <p className="text-center">
            {eng_lang.story_clues.paragrapgh_line_1}
            <br />
            {eng_lang.story_clues.paragrapgh_line_2}
          </p>
          <img
            src={HeroImg}
            class="d-block w-100 carousel__max-height"
            alt="..."
          />
        </div>
        <div class="carousel-item" ref={lastItem}>
          <p className="text-center">
            {eng_lang.story_clues.paragrapgh_line_1}
            <br />
            {eng_lang.story_clues.paragrapgh_line_2}
          </p>
          <img
            src={HeroImg}
            class="d-block w-100 carousel__max-height"
            alt="..."
          />
        </div>
        <div className="d-flex justify-content-between carousel__spacing btns-div">
          <BlockButton
            showImg={false}
            text={"Previous"}
            imgPath={""}
            name={"previous"}
            handleModalName={handleNext}
            transparent_btn={true}
            data_bs_target="#carouselExampleControls"
            data_bs_slide="prev"
          />
          <div className={`carousel__min-width btn-nxt `}>
            <BlockButton
              showImg={false}
              text={"Next"}
              imgPath={""}
              name={"next"}
              handleModalName={handleNext}
              secondary={false}
              data_bs_target="#carouselExampleControls"
              data_bs_slide="next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryClues;
