// libraries
import React from "react";

// components
import { NftDetails, CongratSection, DescriptionSection } from "..";

// style
import "./style.scss";

// constants

// assets
import { success_1 } from "../../../assets";

const ScrollingModal = () => {
  return (
    <div
      className={`modal fade show d-block scroll-modal`}
      id="scrollModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal__wide scroll-modal__modal-margin">
        <div className="d-flex justify-content-center sm-modal__img-top">
          <img
            src={success_1}
            alt={"success_1"}
            className={`sm-modal__cat-img `}
          />
        </div>
        <div className="modal-content modal__box">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="modal__btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {}}
            ></button>
          </div>

          <div className="modal-body scroll-modal__padding-body  ">
            <NftDetails />
            <CongratSection />
            <DescriptionSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingModal;
