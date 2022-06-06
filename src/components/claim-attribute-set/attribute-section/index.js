// libraries
import React from "react";

// components
import { FilterSuspectTrait } from "..";

// styles
import "./style.scss";

// assets
import { Undeline, underline_vertical } from "../../../assets";

const AttributeSection = () => {
  return (
    <div className="row attribute">
      <div className="col-md-3 ">
        <FilterSuspectTrait />
      </div>
      <div className="col-md-6">
        <FilterSuspectTrait />
      </div>
      <div className="col-md-3">
        <FilterSuspectTrait />
      </div>
    </div>
  );
};

export default AttributeSection;
