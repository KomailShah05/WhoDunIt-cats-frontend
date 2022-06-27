// libraries
import React from "react";

// styles
import "./style.scss";

// constants
import { eng_lang } from "../../lib/utills/constants";

const TermsAndConditions = () => {
  return (
    <section className="terms-and-conditions">
      <div className="container-xxl">
        <div className="d-flex justify-content-center flex-column">
          <h2 className="text-white text-uppercase heading">
            {eng_lang.termsAndConditions.heading}
          </h2>
          <p className="text-uppercase subtitle">
            {eng_lang.termsAndConditions.subtitle}
          </p>
          <p className="paragraph mt-24">
            {eng_lang.termsAndConditions.paragraph_1_lines.line_1}
            <br />
            {eng_lang.termsAndConditions.paragraph_1_lines.line_2}
            <br />
            {eng_lang.termsAndConditions.paragraph_1_lines.line_3} <br />
            <p>{eng_lang.termsAndConditions.paragraph_1_lines.line_4}</p>
          </p>
          <p className="paragraph">
            {eng_lang.termsAndConditions.paragraph_2_lines.line_1}
            <br />
            {eng_lang.termsAndConditions.paragraph_2_lines.line_2}
            <br />
            {eng_lang.termsAndConditions.paragraph_2_lines.line_3}
            <br />
            {eng_lang.termsAndConditions.paragraph_2_lines.line_4}
            <br />
            <p> {eng_lang.termsAndConditions.paragraph_2_lines.line_5}</p>
          </p>
          <h5 className="text-white text-uppercase mt-24 sub-heading ">
            {eng_lang.termsAndConditions.personal_info_text}
          </h5>
          <p className="mt-24 paragraph">
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_1.line_1}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_1.line_2}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_1.line_3}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_1.line_4}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_1.line_5}
            <p>
              {
                eng_lang.termsAndConditions.personal_info_paragraphs.para_1
                  .line_6
              }
            </p>
          </p>
          <p className="paragraph">
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_2.line_1}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_2.line_2}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_2.line_3}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_2.line_4}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_2.line_5}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_2.line_6}
            <p>
              {
                eng_lang.termsAndConditions.personal_info_paragraphs.para_2
                  .line_7
              }
            </p>
          </p>
          <p className="paragraph">
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_4.line_1}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_4.line_2}
            <br />
            {eng_lang.termsAndConditions.personal_info_paragraphs.para_4.line_3}
            <p>
              {
                eng_lang.termsAndConditions.personal_info_paragraphs.para_4
                  .line_4
              }
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
