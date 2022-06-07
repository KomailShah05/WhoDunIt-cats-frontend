// libraries
import React from "react";

// constants

// style
import "./style.scss";

const FilterSuspectTrait = ({ title, index }) => {
  return (
    <>
      <div className="d-flex filter">
        <div className="text-white filter__round-btn fill">
          <h6>{index}</h6>
        </div>
        <h5 className="text-white">{title}</h5>
      </div>
    </>
  );
};

export default FilterSuspectTrait;
