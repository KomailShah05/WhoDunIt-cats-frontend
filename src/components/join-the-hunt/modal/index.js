// libraries
import React from "react";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// style
import "./style.scss";

// assets
import { brown_cat } from "../../../assets";

const PopUp = () => {
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal__wide">
          <div class="modal-content modal__box">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                class="modal__btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body modal__padding-body row ">
              <div className="col-md-5 modal__bg-img">
                <img src={brown_cat} alt="brown_cat" />
              </div>
              <div className="col-md-7 ps-md-4">
                <h5 className="text-white">
                  {eng_lang.joint_the_hunt_modal.title}
                </h5>
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
                <button>{eng_lang.connect_to_metamask}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
