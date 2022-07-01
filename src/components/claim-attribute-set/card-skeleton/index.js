// libraries
import React from "react";

// styles
import "./style.scss";

const CardSkeleton = () => {
  return (
    <div className="col-lg-4 col-md-6 card-size skeleton">
      <div className="empty-card-skeleton"></div>
    </div>
  );
};

export default CardSkeleton;
