// libraries
import React from "react";

// styles
import "./style.scss";

// assets

// constants
import { eng_lang } from "../../lib/utills/constants";

const FAQS = () => {
  return (
    <div className="faqs">
      <div className="container-xxl">
        <h2 className="text-white faq-heading text-uppercase">
          {eng_lang.FaqPage.heading}
        </h2>
        <div className="mt-40">
          {eng_lang.FaqPage.questions_answers.length > 0 &&
            eng_lang.FaqPage.questions_answers.map((faq, index) => (
              <div className="faq-section">
                <h5 className="text-white question">{faq.question}</h5>
                <p className="text-white ">{faq.answer}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQS;
