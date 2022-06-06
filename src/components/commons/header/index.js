// libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//constants
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./index.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      return setScroll(false);
    } else if (window.scrollY > 70) {
      return setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div
        className={` d-flex justify-content-end align-items-center fixed-top ${
          scroll && "bg-dark "
        }`}
      >
        <div className={`header-position ${scroll && "mt-0 scroll-animation"}`}>
          <h1
            className={`text-white header__heading ${
              scroll && "header__scroll-heading "
            }`}
          >
            {eng_lang.title}
          </h1>
          <div className="d-flex tabs">
            <h6>
              <Link to={"/"} className="text-white">
                {eng_lang.header.tabs}
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
