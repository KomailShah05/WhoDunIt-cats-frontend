// libraries
import React from "react";

// constants
import { eng_lang } from "../../../../lib/utills/constants";

// assets
import { golden, Undeline } from "../../../../assets";

const BuyBody = () => {
  return (
    <>
      <h2 className="text-white text-center">
        {eng_lang.buy_flow_modal.transaction_detail}
      </h2>
      <div className="sm-modal__body-margin">
        <div className="d-flex justify-content-between ">
          <p>{eng_lang.buy_flow_modal.nft_price}</p>
          <div className="d-flex flex-column align-items-end">
            <h5 className="text-white">{eng_lang.dollar}200</h5>
            <p>
              <img src={golden} alt={golden} /> 0.11 {eng_lang.eth}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <p>{eng_lang.buy_flow_modal.transaction_fee}</p>
          <h5 className="text-white">{eng_lang.dollar}200</h5>
        </div>
        <img src={Undeline} alt="Undeline" className="w-100" />
        <div className="d-flex justify-content-between ">
          <p>{eng_lang.buy_flow_modal.total_price}</p>
          <div className="d-flex flex-column align-items-end">
            <h5 className="text-white">{eng_lang.dollar}200</h5>
            <p>
              <img src={golden} alt={golden} /> 0.11 {eng_lang.eth}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBody;
