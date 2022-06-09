// libraries
import React from "react";

// constants

// style
import "./style.scss";

const FilterSuspectTrait = ({ title, index, fill }) => {
  return (
    <>
      <div className="d-flex align-items-center filter ">
        <div className={`text-white filter__round-btn ${fill && "fill"} `}>
          <h6>{index}</h6>
        </div>
        <h5 className="text-white text-capitalize">{title}</h5>
      </div>
    </>
  );
};

export default FilterSuspectTrait;
