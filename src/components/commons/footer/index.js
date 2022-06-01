// libraries
import React from "react";
import { Link } from "react-router-dom";

//constants
import { eng_lang } from "../../../lib/utills/constants";

//styles
import "./index.scss";

//assets
import { DiscordIcon, TwitterIcon, InstagramIcon } from "../../../assets";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-5">
            <ul className="list-unstyled list">
              <Link to={"/"}>
                <li>{eng_lang.footer.terms_and_conditions}</li>
              </Link>
              <Link to={"/"}>
                {" "}
                <li>{eng_lang.footer.support_email}</li>
              </Link>

              <li className="list__copyrights">{eng_lang.footer.copyrights}</li>
            </ul>
          </div>
          <div className="col-2 ">
            {" "}
            <ul className="list-unstyled list ">
              <Link to={"/"}>
                <li>
                  <img src={TwitterIcon} alt="twitter" />
                  {eng_lang.footer.twitter}
                </li>
              </Link>
              <Link to={"/"}>
                <li>
                  <img src={DiscordIcon} alt="discord" />
                  {eng_lang.footer.discord}
                </li>
              </Link>
              <Link to={"/"}>
                <li>
                  <img src={InstagramIcon} alt="instagram" />
                  {eng_lang.footer.instagram}
                </li>
              </Link>
            </ul>
          </div>

          <div className="col-5">
            <ul className="list-unstyled list">
              <li className="footer-touch-heading ">
                {eng_lang.footer.stay_in_touch}
              </li>
              <li>
                <button className="subscribe-btn">
                  {eng_lang.buttonConstants.subscribe_btn_text}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
