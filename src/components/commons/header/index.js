// libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//constants
import { eng_lang } from "../../../lib/utills/constants";

// styles
import "./index.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  return (
    <>
      <div className="bg-transparent d-flex justify-content-end align-items-center fixed-top">
        <div className="header-position">
          <h1 className={`text-white ${scroll && "header__scroll-heading"}`}>
            {eng_lang.title}
          </h1>
          <div className="d-flex">
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
