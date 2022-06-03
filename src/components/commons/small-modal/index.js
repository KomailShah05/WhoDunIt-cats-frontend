// libraries
import React from "react";

// components
import { BlockButton } from "../../commons";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// style
import "./style.scss";

// assets
import { brown_cat, cat } from "../../../assets";

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
                {eng_lang.joint_the_hunt_modal.title}
              </h2>
              <div className="modal__body-margin">
                <div className="d-flex justify-content-between ">
                  <p>{eng_lang.joint_the_hunt_modal.price}</p>
                  <h5 className="text-white">$200</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <p>{eng_lang.joint_the_hunt_modal.total_minted}</p>
                  <h5 className="text-white">
                    5016{" "}
                    <span className="color-gray">
                      {eng_lang.joint_the_hunt_modal.of} 5000
                    </span>
                  </h5>
                </div>
                <h5 className="text-white">
                  {eng_lang.joint_the_hunt_modal.sub_title}
                </h5>
                <p>{eng_lang.joint_the_hunt_modal.paragraph}</p>
              </div>
              <BlockButton
                showImg={true}
                text={eng_lang.connect_to_metamask}
                imgPath={cat}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallPopup;
