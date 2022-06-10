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
        <button
          className={`navbar-toggler align-self-center justify-content-start me-5  ${
            scroll && "mt-0 align-self-start"
          }`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#collapsibleNavId"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className={`header-position ${scroll && "mt-0 scroll-animation"}`}>
          <h1
            className={`text-white header__heading  ${
              scroll && "header__scroll-heading "
            }`}
          >
            {eng_lang.title}
          </h1>
          <div className="d-flex tabs">
            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <Link to={"/"} className="text-white nav-link  ">
                  {eng_lang.header.tabs[0]}
                </Link>
              </li>
              {url === routes.STORY_RELEASE ||
              url === routes.CLUES ||
              url === routes.STORY_INTRO ||
              url === routes.CLAIM_ATTRIBUTE ? (
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
            <div
              class="offcanvas offcanvas-start  justify-content-end"
              id="collapsibleNavId"
              tabIndex="-1"
            >
              <button
                type="button"
                class="btn-close text-reset align-self-end p-3"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
              <div className="offcanvas-header d-flex justify-content-center mb-2">
                <h1 className="text-white">{eng_lang.title}</h1>
              </div>
              <div className="offcanvas-body">
                <div className="d-flex tabs">
                  <ul className="flex-column nav w-100 ">
                    <li className="nav-item">
                      <Link to={"/"} className="text-white ">
                        {eng_lang.header.tabs[0]}
                      </Link>
                    </li>
                    {url === routes.STORY_RELEASE ||
                    url === routes.CLUES ||
                    url === routes.STORY_INTRO ||
                    url === routes.CLAIM_ATTRIBUTE ? (
                      <>
                        {" "}
                        <li className="nav-item">
                          <Link to={"/"} className="text-white  ">
                            {eng_lang.header.tabs[1]}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to={"/"} className="text-white  ">
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
      </div>
    </>
  );
};

export default Header;
