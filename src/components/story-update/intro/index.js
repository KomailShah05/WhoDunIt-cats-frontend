//libraries
import React from "react";

//styles
import "./index.scss";

//constants
import { eng_lang } from "../../../lib/utills/constants";

//assets
import { Underline } from "../../../assets";

const Intro = () => {
  return (
    <section className="intro-section">
      <div className=" container text-center intro-content">
        <h2 className="text-white">{eng_lang.storyUpdate.intro_heading}</h2>
        <img className="underline-pos" src={Underline} alt="underline" />
        <div className="d-flex flex-column justify-content-center">
          <p>{eng_lang.storyUpdate.first_line}</p>
          <p>{eng_lang.storyUpdate.second_line}</p>
          <p>{eng_lang.storyUpdate.third_line}</p>
          <br />
          <p>{eng_lang.storyUpdate.first_line}</p>
          <p>{eng_lang.storyUpdate.second_line}</p>
          <p>{eng_lang.storyUpdate.third_line}</p>

          <button className="button-pos btn btn-primary button-style align-self-center">
            {eng_lang.buttonConstants.read_story}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
