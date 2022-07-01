// libraries
import React from "react";
import { useDispatch } from "react-redux";

// components
import { BlockButton } from "../../commons";
import { CongratsBodyAttributes, ErrorBodyAttributes } from "./modal-body";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { displayModalAction } from "../../../redux/actions/claim-attributes";
import { OPEN_SEA_URL, OPEN_SEA_COLLECTION } from "../../../enviroments";

// style
import "./style.scss";

// assets
import { success_1, opensea, success_3 } from "../../../assets";

const SmallPopupCongrats = ({
  displayModal,
  errMsg,
  nftIndex,
  callApi,
  setCallApi,
}) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(displayModalAction(""));
    setCallApi(!callApi);
  };

  const handleOpenSeaUrl = () => {
    window.open(`${OPEN_SEA_URL}${nftIndex}`, "_blank");
  };

  const openSeaCollectionUrl = () => {
    window.open(`${OPEN_SEA_COLLECTION}`, "_blank");
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
                src={
                  displayModal === eng_lang.claim_nft ? success_1 : success_3
                }
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
              {displayModal === eng_lang.claim_nft ? (
                <>
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
                      handleClick={handleOpenSeaUrl}
                      secondary={true}
                    />
                  </div>
                </>
              ) : (
                <>
                  <ErrorBodyAttributes errMsg={errMsg} />
                  <BlockButton
                    showImg={false}
                    text={eng_lang.buttonConstants.buy_on_open_sea}
                    imgPath={""}
                    name={""}
                    handleClick={openSeaCollectionUrl}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallPopupCongrats;
