// libraries
import React from "react";

// styles
import "./style.scss";

const CardSkeleton = ({ wide }) => {
  return (
    <div
      className={`col-lg-4 col-md-6 card-size skeleton ${
        wide && "full-size w-100"
      } `}
    >
      <div
        className={`empty-card-skeleton  ${
          wide ? "w-100 empty-card-wide" : "empty-card"
        }`}
      ></div>
    </div>
  );
};

export default CardSkeleton;
