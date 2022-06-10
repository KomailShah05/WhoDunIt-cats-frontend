// libraries
import React from "react";

// components
import { FilterSuspectTrait, Select } from "..";

// constants
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./style.scss";

// assets
import { CatOne, CatTwo, CatThree } from "../../../assets";

const AttributeSection = () => {
  return (
    <div className="row attribute gx-0">
      <div className=" col col-md-3 d-flex flex-column align-items-center">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_one.title}
          index={1}
          fill={true}
        />
        <div className="attribute__min-width">
          <Select
            heading={eng_lang.claim_attribute_set.section_one.height}
            options={eng_lang.claim_attribute_set.section_one.height_options}
          />
          <Select
            heading={eng_lang.claim_attribute_set.section_one.eyes}
            options={eng_lang.claim_attribute_set.section_one.eyes_options}
          />
          <Select
            heading={eng_lang.claim_attribute_set.section_one.glasses}
            options={eng_lang.claim_attribute_set.section_one.glasses_options}
          />
          <Select
            heading={eng_lang.claim_attribute_set.section_one.hats}
            options={eng_lang.claim_attribute_set.section_one.hat_options}
          />
          <Select
            heading={eng_lang.claim_attribute_set.section_one.clothes}
            options={eng_lang.claim_attribute_set.section_one.clothes_options}
          />
        </div>
      </div>
      <div className="col col-md-1 cats  ">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_two.title}
          index={2}
          fill={true}
        />
        <div className=" mt-4 p-0 d-flex flex-lg-row flex-column align-items-center  ">
          <img src={CatOne} alt="cat" />
          <img src={CatTwo} alt="cat" />
          <img src={CatThree} alt="cat" />
        </div>
        <div className="mt-40 p-0 d-flex flex-lg-row flex-column ">
          <img src={CatOne} alt="cat" />
          <img src={CatTwo} alt="cat" />
        </div>
      </div>
      <div className="col-md-8 filter-sus">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_three.title}
          index={3}
          fill={true}
        />
        <img className="selected-cat" src={CatOne} alt="cat" />
        <div className="d-flex justify-content-between metadata-nft">
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.serial_number}
          </p>
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.serial_value}
          </p>
        </div>
        <div className="d-flex justify-content-between metadata-nft">
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.plank_number}
          </p>
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.plank_value}
          </p>
        </div>

        <button className="btn btn-primary mint-btn">
          {eng_lang.buttonConstants.mint_suspect}
        </button>
      </div>
    </div>
  );
};

export default AttributeSection;
