import React from "react";

// assets
import { error } from "../../assets";

const Error = () => {
  return (
    <div className=" vh-100 d-flex justify-content-center align-items-center">
      <img
        className="d-block w-100 h-100 object-contain"
        src={error}
        alt="error"
      />
    </div>
  );
};

export default Error;
