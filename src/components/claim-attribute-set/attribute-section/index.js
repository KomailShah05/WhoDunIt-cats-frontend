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
  const select_data = [
    {
      heading: "test",
      options: [eng_lang.claim_attribute_set.section_one.height_options],
    },
    {
      heading: "test ",
      options: [eng_lang.claim_attribute_set.section_one.height_options],
    },
  ];
  select_data.map((item, index) =>
    console.log("item.heading,item.options", item.heading, item.options)
  );
  return (
    <div className="row attribute gx-0 ,x-auto">
      <div className=" col-md-3 d-flex flex-column align-items-center">
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
      <div className="col-md-6">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_two.title}
          index={2}
          fill={true}
        />
        <div className="row w-100 suspects ">
          <Card />
        </div>
      </div>
      <div className="col-md-3">
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
