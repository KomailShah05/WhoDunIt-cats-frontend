// libraries
import React from "react";

// components
import { BlockButton } from "../../commons";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// style
import "./style.scss";

// assets
import { cat, Clipper, Undeline, golden } from "../../../assets";

const SmallPopup = () => {
  return (
    <>
      <div
        class="modal fade sm-modal"
        id="smallModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered sm-modal__wide">
          <div class="modal-content sm-modal__bg-color">
            <div className="d-flex justify-content-center sm-modal__img-top">
              <img src={Clipper} alt={Clipper} className="sm-modal__cat-img " />
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="modal__btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body sm-modal__padding-body">
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
              <BlockButton
                showImg={false}
                text={eng_lang.buy_nft}
                imgPath={""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallPopup;
