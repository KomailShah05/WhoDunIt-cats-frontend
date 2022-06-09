// libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//constants
import { eng_lang, routes } from "../../../lib/utills/constants";

// styles
import "./index.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const url = window.location.pathname;
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
        className={` d-flex justify-content-end align-items-center fixed-top navbar navbar-dark navbar-light navbar-expand-lg ${
          scroll && "bg-dark "
        }`}
      >
        <div className={`header-position ${scroll && "mt-0 scroll-animation"}`}>
          <h1
            className={`text-white header__heading  ${
              scroll && "header__scroll-heading "
            }`}
          >
            {eng_lang.title}
          </h1>
          <div className="flex-lg-row flex-column">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse justify-content-end"
              id="collapsibleNavId"
            >
              <div className="d-flex tabs">
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <Link to={"/"} className="text-white nav-link ">
                      {eng_lang.header.tabs[0]}
                    </Link>
                  </li>
                  {url === routes.STORY_RELEASE ? (
                    <>
                      {" "}
                      <li className="nav-item">
                        <Link to={"/"} className="text-white nav-link ">
                          {eng_lang.header.tabs[1]}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to={"/"} className="text-white nav-link ">
                          {eng_lang.header.tabs[2]}
                        </Link>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
