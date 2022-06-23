// libraries
import React from "react";

// styles
import "./style.scss";

// constants
import { eng_lang } from "../../lib/utills/constants";

const TermsAndConditions = () => {
  return (
    <section className="terms-and-conditions">
      <div className="container">
        <div className="d-flex justify-content-center flex-column">
          <h2 className="text-white text-uppercase heading">
            {eng_lang.termsAndConditions.heading}
          </h2>
          <p className="text-uppercase subtitle">
            {eng_lang.termsAndConditions.subtitle}
          </p>
          <p className="paragraph">
            {eng_lang.termsAndConditions.paragraph_1_lines.line_1}
          </p>
          <p>{eng_lang.termsAndConditions.paragraph_1_lines.line_2}</p>
          <p>{eng_lang.termsAndConditions.paragraph_1_lines.line_3}</p>
          <p>{eng_lang.termsAndConditions.paragraph_1_lines.line_4}</p>
          <p>{eng_lang.termsAndConditions.paragraph_2_lines.line_1}</p>
          <p>{eng_lang.termsAndConditions.paragraph_2_lines.line_2}</p>
          <p>{eng_lang.termsAndConditions.paragraph_2_lines.line_3}</p>
          <p>{eng_lang.termsAndConditions.paragraph_2_lines.line_4}</p>
          <p>{eng_lang.termsAndConditions.paragraph_2_lines.line_5}</p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
