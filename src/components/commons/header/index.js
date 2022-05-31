// libraries
import React, { useState } from "react";

// styles
import "./index.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  // detect scroll on page
  window.onscroll = function () {
    scrollFunction();
  };

  //on scroll change header
  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.fontSize = "30px";
    } else {
      document.getElementById("header").style.fontSize = "90px";
    }
  }

  return (
    <>
      <div className="bg-transparent d-flex justify-content-end align-items-center fixed-top">
        <div className="header-position">
          <h1 className="text-white">WhoDunIt Cats?</h1>
          <div className="d-flex">
            {/* <h6 className="text-white">How it works?</h6>
            <h6 className="text-white">How it works?</h6> */}
            <h6>
              <a className="text-white" href="/">
                How it works?
              </a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
