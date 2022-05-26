// libraries
import React from "react";

// styles
import "./index.css";

const Header = () => {
  return (
    <>
      <div className="bg-transparent d-flex justify-content-end align-items-center fixed-top">
        <div className="header-position">
          <h1 className="text-white">WhoDunIt Cats</h1>
          <div className="d-flex">
            {/* <h6 className="text-white">How it works?</h6>
            <h6 className="text-white">How it works?</h6> */}
            <h6 className="text-white">How it works?</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
