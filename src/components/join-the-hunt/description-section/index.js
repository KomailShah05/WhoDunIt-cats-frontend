// libraries
import React from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./style.scss";

const DescriptionSection = () => {
  return (
    <div className="description">
      <h3 className="text-white">
        {eng_lang.winnerRevealLandingPage.case_deduction}
      </h3>
      <p>
        {eng_lang.winnerRevealLandingPage.case_line_1}
        <br />
        {eng_lang.winnerRevealLandingPage.case_line_2}
        <br />
        {eng_lang.winnerRevealLandingPage.case_line_3}
        <br />
        {eng_lang.winnerRevealLandingPage.case_lines}
        <br />
      </p>
    </div>
  );
};

export default DescriptionSection;
