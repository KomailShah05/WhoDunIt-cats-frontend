// libraries
import React from "react";

// components
import { FilterSuspectTrait, Select } from "..";

// assets
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./style.scss";

// assets

const AttributeSection = () => {
  return (
    <div className="row attribute">
      <div className="col-md-3">
        <div>
          <FilterSuspectTrait
            title={eng_lang.claim_attribute_set.section_one.title}
            index={1}
            fill={true}
          />
          <Select />
        </div>
      </div>
      <div className="col-md-6">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_two.title}
          index={2}
          fill={false}
        />
      </div>
      <div className="col-md-3">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_three.title}
          index={3}
          fill={false}
        />
      </div>
    </div>
  );
};

export default AttributeSection;
