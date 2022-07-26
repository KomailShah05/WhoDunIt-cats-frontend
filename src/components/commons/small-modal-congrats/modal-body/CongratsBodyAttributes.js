// libraries
import React from "react";

// constants
import { eng_lang } from "../../../../lib/utills/constants";

const CongratsBodyAttributes = () => {
  return (
    <>
      <h2 className="text-white text-sm-center">{eng_lang.congratulation}</h2>
      <div className="sm-modal__congrats-body-margin">
        <p className="text-sm-center ps-sm-1 pe-sm-1">
          {eng_lang.claim_attribute_set.congrats_text_modal}
        </p>
        <h5 className="text-white">{eng_lang.stay_updated}</h5>
      </div>
    </>
  );
};

export default CongratsBodyAttributes;
