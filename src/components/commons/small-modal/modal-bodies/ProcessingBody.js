// libraries
import React from "react";

// constants
import { eng_lang } from "../../../../lib/utills/constants";

const ProcessingBody = () => {
  return (
    <div className="sm-modal__loading-body d-flex flex-column align-items-center">
      <h3 className="text-white">{eng_lang.buy_flow_modal.processing}</h3>
      <p>{eng_lang.buy_flow_modal.processing_content}</p>
    </div>
  );
};

export default ProcessingBody;
