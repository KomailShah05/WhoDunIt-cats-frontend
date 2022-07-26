// libraries
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//constants
import { eng_lang, routes } from "../../../lib/utills/constants";

// styles
import "./index.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const url = window.location.pathname;
  const {
    nftsReducer: { totalMinted },
    winnerReducer: { isWinner },
  } = useSelector((state) => state);

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
    <div className="container-xl">
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
          <span className="navbar-toggler-icon"></span>
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
                <a
                  href={`${
                    url === routes.HOME ? "#howItWorks" : `${routes.HOME}`
                  }`}
                  className={`text-white nav-link`}
                >
                  {eng_lang.header.tabs[0]}
                </a>
              </li>
              {totalMinted >= eng_lang.totalNoOfMintToken ? (
                <>
                  <li
                    className={`nav-item ${
                      url === routes.STORY_INTRO || url === routes.CLUES
                        ? "text-decoration-underline"
                        : "text-decoration-none"
                    } `}
                  >
                    <Link
                      to={routes.STORY_INTRO}
                      className={`text-white nav-link`}
                    >
                      {eng_lang.header.tabs[1]}
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${
                      url === routes.CLAIM_ATTRIBUTE &&
                      "text-decoration-underline"
                    }`}
                  >
                    <Link
                      to={routes.CLAIM_ATTRIBUTE}
                      className={`text-white nav-link ${
                        isWinner === true && "d-none"
                      } `}
                    >
                      {eng_lang.header.tabs[2]}
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
            <div
              className="offcanvas offcanvas-start  justify-content-end"
              id="collapsibleNavId"
              tabIndex="-1"
            >
              <button
                type="button"
                className="btn-close text-reset align-self-end p-3"
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
                      <a
                        href={`${
                          url === routes.HOME ? "#howItWorks" : `${routes.HOME}`
                        }`}
                        className="text-white"
                      >
                        {eng_lang.header.tabs[0]}
                      </a>
                    </li>
                    {totalMinted >= eng_lang.totalNoOfMintToken ? (
                      <>
                        {" "}
                        <li className="nav-item">
                          <Link to={routes.STORY_INTRO} className="text-white">
                            {eng_lang.header.tabs[1]}
                          </Link>
                        </li>
                        <li
                          className={`nav-item ${
                            isWinner === true && "d-none"
                          }`}
                        >
                          <Link
                            to={routes.CLAIM_ATTRIBUTE}
                            className={`text-white `}
                          >
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
    </div>
  );
};

export default Header;
