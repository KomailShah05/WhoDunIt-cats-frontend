// libraries
import React from "react";
import { Link } from "react-router-dom";

//constants
import { eng_lang, routes } from "../../../lib/utills/constants";

//styles
import "./index.scss";

//assets
import { DiscordIcon, TwitterIcon, InstagramIcon } from "../../../assets";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container-xl">
        <div className="row align-items-center text-center text-lg-start">
          <div className="col-lg-5 first-col">
            <ul className="list-unstyled list">
              <li>
                <a href={routes.FAQS}>{eng_lang.footer.faq}</a>
              </li>
              <li>
                <a href={routes.TERMS_AND_CONDITIONS}>
                  {eng_lang.footer.terms_and_conditions}
                </a>
              </li>
              <li>
                <Link to={"/"}>{eng_lang.footer.support_email} </Link>
              </li>
              <li className="list__copyrights">{eng_lang.footer.copyrights}</li>
            </ul>
          </div>
          <div className="col-lg-3 ">
            {" "}
            <ul className="list-unstyled list ">
              <li>
                <a href={"/"} target="_blank" rel="noreferrer">
                  <img src={TwitterIcon} alt="twitter" />
                  {eng_lang.footer.twitter}
                </a>
              </li>
              <li>
                <a href={"/"} target="_blank" rel="noreferrer">
                  <img src={DiscordIcon} alt="discord" />
                  {eng_lang.footer.discord}
                </a>
              </li>
              <li>
                <a href={"/"} target="_blank" rel="noreferrer">
                  <img src={InstagramIcon} alt="instagram" />
                  {eng_lang.footer.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 ps-lg-5">
            <ul className="list-unstyled list">
              <li className="footer-touch-heading mb-2rem">
                {eng_lang.footer.stay_in_touch}
              </li>
              <li className="width-100">
                <div className="sub-btn-container position-relative mx-md-auto  ">
                  <span className="mas-sub">
                    {eng_lang.buttonConstants.subscribe_btn_text}
                  </span>
                  <button
                    className="subscribe-btn"
                    data-mdb-ripple-color="primary"
                    name="Hover"
                  >
                    {eng_lang.buttonConstants.subscribe_btn_text}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
