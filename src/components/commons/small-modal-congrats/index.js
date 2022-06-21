// libraries
import React, { useState } from "react";

// components
import { BlockButton } from "../../commons";
import CongratsBodyAttributes from "./modal-body/CongratsBodyAttributes";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// style
import "./style.scss";

// assets
import { success_1, opensea } from "../../../assets";

const SmallPopupCongrats = () => {
  const [modalName, setmodalName] = useState("congrats");

  // show different modal on button clicks
  const handleModalName = (e) => {
    setmodalName(e.target.name);
  };

  return (
    <>
      <div
        className={`modal fade sm-modal `}
        id="smallModalCongrats"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered sm-modal__wide `}>
          <div className="modal-content sm-modal__bg-color">
            <div className="d-flex justify-content-center sm-modal__img-top">
              <img
                src={success_1}
                alt={success_1}
                className="sm-modal__cat-img "
              />
            </div>
            <div className="d-flex justify-content-end sm-modal__padding-sm">
              <button
                type="button"
                className="modal__btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                // onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body sm-modal__padding-body">
              <CongratsBodyAttributes />

              <BlockButton
                showImg={false}
                text={
                  modalName === "congrats"
                    ? eng_lang.buttonConstants.subscribe_btn_text
                    : modalName === "buy"
                    ? eng_lang.buy_nft
                    : ""
                }
                imgPath={""}
                name={modalName === "buy" ? "loading" : ""}
                handleClick={modalName === "buy" && handleModalName}
              />
              <div className="sm-modal__mg-btw-btns">
                <BlockButton
                  showImg={true}
                  text={eng_lang.view_on_open_sea}
                  imgPath={opensea}
                  name={"opensea"}
                  handleClick={""}
                  secondary={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallPopupCongrats;
