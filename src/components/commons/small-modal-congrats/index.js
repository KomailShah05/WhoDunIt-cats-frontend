// libraries
import React from "react";
import { useDispatch } from "react-redux";

// components
import { BlockButton } from "../../commons";
import CongratsBodyAttributes from "./modal-body/CongratsBodyAttributes";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { displayModalAction } from "../../../redux/actions/claim-attributes";

// style
import "./style.scss";

// assets
import { success_1, opensea } from "../../../assets";

const SmallPopupCongrats = ({ displayModal }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(displayModalAction(""));
  };
  return (
    <>
      <div
        className={`modal fade sm-modal ${displayModal && "d-block show"}`}
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
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body sm-modal__padding-body">
              <CongratsBodyAttributes />
              <BlockButton
                showImg={false}
                text={eng_lang.buttonConstants.subscribe_btn_text}
                imgPath={""}
                name={""}
                handleClick={() => {}}
              />
              <div className="sm-modal__mg-btw-btns">
                <BlockButton
                  showImg={true}
                  text={eng_lang.view_on_open_sea}
                  imgPath={opensea}
                  name={"opensea"}
                  handleClick={() => {}}
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
