// libraries
import React from "react";

// components
import { FilterSuspectTrait, Select, Card } from "..";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./style.scss";

// assets
import { CatOne } from "../../../assets";

const AttributeSection = () => {
  const selections = eng_lang.claim_attribute_set.section_one.select_data;
  return (
    <div className="container-xl">
      <div className="row attribute gx-0 mx-auto">
        <div className=" col-lg-3 d-flex flex-column align-items-center">
          <FilterSuspectTrait
            title={eng_lang.claim_attribute_set.section_one.title}
            index={1}
            fill={true}
          />
          <div className="attribute__min-width">
            {selections.map((item) => (
              <Select heading={item.attribute_name} options={item.options} />
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <FilterSuspectTrait
            title={eng_lang.claim_attribute_set.section_two.title}
            index={2}
            fill={true}
          />
          <div className="row w-100 suspects ">
            <Card />
          </div>
        </div>
        <div className="col-lg-3">
          <FilterSuspectTrait
            title={eng_lang.claim_attribute_set.section_three.title}
            index={3}
            fill={true}
          />
          <div className="d-flex justify-content-center justify-content-lg-start">
            {" "}
            <img className="selected-cat" src={CatOne} alt="cat" />
          </div>

          <div className="d-flex justify-content-between metadata-nft">
            <p className="text-white">
              {eng_lang.claim_attribute_set.section_three.serial_number}
            </p>
            <p className="text-white">
              {eng_lang.claim_attribute_set.section_three.serial_value}
            </p>
          </div>
          <div className="d-flex  justify-content-between  metadata-nft">
            <p className="text-white">
              {eng_lang.claim_attribute_set.section_three.plank_number}
            </p>
            <p className="text-white">
              {eng_lang.claim_attribute_set.section_three.plank_value}
            </p>
          </div>

          <button
            className="btn btn-primary mint-btn"
            data-bs-toggle="modal"
            data-bs-target="#smallModalCongrats"
          >
            {eng_lang.buttonConstants.mint_suspect}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttributeSection;
