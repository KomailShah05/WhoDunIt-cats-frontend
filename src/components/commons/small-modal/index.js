// libraries
import React, { useEffect, useState } from "react";

// components
import { BlockButton } from "../../commons";
import { BuyBody, ProcessingBody, CongratsBody } from "./modal-bodies";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// style
import "./style.scss";

// assets
import { Clipper, clipper_loading, success, opensea } from "../../../assets";

const SmallPopup = () => {
  const [modalName, setmodalName] = useState("buy");

  // show different modal on button clicks
  const handleModalName = (e) => {
    setmodalName(e.target.name);
  };

  // After 5 seconds show next modal screen
  const showNextScreen = () => {
    setmodalName("congrats");
  };

  // show processing modal for 5 seconds
  useEffect(() => {
    if (modalName === "loading") setTimeout(showNextScreen, 5000);
  }, [modalName]);

  return (
    <>
      <div
        className="modal fade sm-modal"
        id="smallModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered ${
            modalName === "loading"
              ? "sm-modal__loading-wide"
              : "sm-modal__wide"
          }`}
        >
          <div className="modal-content sm-modal__bg-color">
            <div className="d-flex justify-content-center sm-modal__img-top">
              <img
                src={
                  modalName === "buy"
                    ? Clipper
                    : modalName === "loading"
                    ? clipper_loading
                    : modalName === "congrats"
                    ? success
                    : ""
                }
                alt={Clipper}
                className="sm-modal__cat-img "
              />
            </div>
            {modalName === "loading" && <ProcessingBody />}
            {modalName !== "loading" && (
              <>
                <div className="d-flex justify-content-end sm-modal__padding-sm">
                  <button
                    type="button"
                    className="modal__btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body sm-modal__padding-body">
                  {modalName === "buy" && <BuyBody />}
                  {modalName === "congrats" && <CongratsBody />}
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
                  {modalName === "congrats" && (
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
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallPopup;
