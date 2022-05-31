//libraries
import React from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";

//styles
import "./index.scss";

//assets
import { HowToExport, Underline } from "../../../assets";

const HowItWorks = () => {
  return (
    <section className="HowItWorks">
      <div className="row ps-lg-5 HowItWorks__margin-tp-btm">
        <div className="col-lg-5">
          <div className=" d-flex justify-content-center">
            <img src={HowToExport} alt="HowToExport" />
          </div>
        </div>
        <div className="col-lg-7">
          <h2 className="text-white">{eng_lang.howItWorks.heading}</h2>
          <img className="underline" src={Underline} alt="Underline" />
          <p className="working-text">
            {eng_lang.howItWorks.first_line} <br />
            {eng_lang.howItWorks.second_line} <br />
            {eng_lang.howItWorks.third_line} <br />
            {eng_lang.howItWorks.fourth_line} <br />
            {eng_lang.howItWorks.fifth_line} <br />
            {eng_lang.howItWorks.sixth_line} <br />
            {eng_lang.howItWorks.seventh_line} <br />
            {eng_lang.howItWorks.eight_line} <br />
            {eng_lang.howItWorks.last_line}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
