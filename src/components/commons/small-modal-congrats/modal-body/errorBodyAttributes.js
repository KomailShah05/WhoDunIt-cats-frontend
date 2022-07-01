// libraries
import React from "react";

// constants
import { eng_lang } from "../../../../lib/utills/constants";

const ErrorBodyAttributes = ({ errMsg }) => {
  return (
    <>
      <h2 className="text-white text-sm-center">
        {eng_lang.claim_attribute_set.error_heading}
      </h2>
      <div className="sm-modal__congrats-body-margin">
        <p className="text-sm-center ps-sm-1 pe-sm-1">
          {errMsg || eng_lang.claim_attribute_set.error_body}
        </p>
      </div>
    </>
  );
};

export default ErrorBodyAttributes;
