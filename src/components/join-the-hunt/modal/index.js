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

const PopUp = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal__wide">
          <div className="modal-content modal__box">
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="modal__btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body modal__padding-body row ">
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
                <BlockButton
                  showImg={true}
                  text={eng_lang.connect_to_metamask}
                  imgPath={cat}
                  data_bs_toggle="modal"
                  data_bs_target="#smallModal"
                  data_bs_dismiss="modal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
