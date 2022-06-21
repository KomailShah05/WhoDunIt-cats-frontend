// libraries
import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";

// components
import { BlockButton } from "../../commons";
import {
  BuyBody,
  ProcessingBody,
  CongratsBody,
  ErrorBody,
} from "./modal-bodies";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { EtheriumContext } from "../../../services/etherium-blockchain/EtheriumProvider";
import { buyErrorSolved } from "../../../redux/actions/buy-flow";
import { showModalAction } from "../../../redux/actions/nfts";
import { OPEN_SEA_URL } from "../../../enviroments";

// style
import "./style.scss";

// assets
import {
  ClipperPng,
  clipper_loading,
  success_1,
  opensea,
  success_2,
  success_3,
} from "../../../assets";

const SmallPopup = ({
  walletAddress,
  voucher,
  buyInProgress,
  buyError,
  congrats,
  showModal,
  tokenId,
}) => {
  const dispatch = useDispatch();
  const { buyNft } = useContext(EtheriumContext);

  const [modalName, setmodalName] = useState("buy");

  // show different modal on button clicks
  const handleModalName = () => {
    buyNft(voucher.wallet_id, voucher, voucher.signature);
  };

  // show processing modal
  useEffect(() => {
    if (buyInProgress) {
      setmodalName("loading");
    } else if (buyError.error) {
      setmodalName("error");
    } else if (congrats) {
      setmodalName("congrats");
    } else {
      setmodalName("buy");
    }
  }, [buyInProgress, buyError, congrats]);

  const handleClose = () => {
    dispatch(buyErrorSolved());
    dispatch(showModalAction(""));
  };

  console.log("tokenId", tokenId);
  const handleOpenSeaUrl = () => {
    window.open(`${OPEN_SEA_URL}${tokenId}`, "_blank");
  };

  return (
    <>
      <div
        className={`modal fade sm-modal ${
          showModal === eng_lang.buyModal && "show d-block"
        }`}
        id="smallModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className={`modal-dialog modal-dialog-centered  ${
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
                    ? ClipperPng
                    : modalName === "loading"
                    ? clipper_loading
                    : modalName === "congrats"
                    ? success_1
                    : modalName === "error"
                    ? success_2
                    : buyError.errorType === eng_lang.insufficient_fund
                    ? success_3
                    : ClipperPng
                }
                alt={ClipperPng}
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
                    data-bs-dismiss="sm-modal"
                    aria-label="Close"
                    onClick={handleClose}
                    disabled={buyInProgress}
                  ></button>
                </div>
                <div className="modal-body sm-modal__padding-body">
                  {modalName === "buy" && (
                    <BuyBody voucher={voucher} walletAddress={walletAddress} />
                  )}
                  {modalName === "error" && <ErrorBody buyError={buyError} />}

                  {modalName === "congrats" && <CongratsBody />}

                  <BlockButton
                    showImg={false}
                    text={
                      modalName === "congrats"
                        ? eng_lang.buttonConstants.subscribe_btn_text
                        : modalName === "buy"
                        ? eng_lang.buy_nft
                        : modalName === "error"
                        ? eng_lang.try_again
                        : "---"
                    }
                    imgPath={""}
                    name={modalName === "buy" ? "loading" : ""}
                    handleClick={
                      modalName === "buy" || modalName === "error"
                        ? handleModalName
                        : () => {}
                    }
                    disable={buyInProgress}
                  />
                  {modalName === "congrats" && (
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
