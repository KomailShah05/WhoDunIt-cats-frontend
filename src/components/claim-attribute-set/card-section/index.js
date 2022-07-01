// libraries
import React from "react";

// components
import { CardSkeleton } from "..";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { OPEN_SEA_URL } from "../../../enviroments";

// styles
import "./style.scss";

// assets

const CardSection = ({ suspectedCats, setselectedCat, loading }) => {
  // store data of selected cat
  const handleSelectedCat = (cat) => {
    setselectedCat(cat);
  };
  const handleOpenSeaUrl = (index) => {
    window.open(`${OPEN_SEA_URL}${index}`, "_blank");
  };
  return (
    <>
      {suspectedCats?.length > 0 &&
        suspectedCats?.map((cat, index) => {
          if (cat?.isClaimed) {
            return (
              <div
                key={index}
                className={`col-lg-4 col-md-6 card-size unavailable `}
              >
                <div className="unavailable-text">
                  <p>Unavailable</p>
                </div>

                <img src={cat?.imagePath} alt="cat" tabIndex="0" />
                <div className="overlay-on-hover text-center">
                  <p className="overlay-header">
                    {eng_lang.claim_attribute_set.section_two.hover_heading}
                  </p>
                  <p className="overlay-description ">
                    {eng_lang.claim_attribute_set.section_two.hover_descr_1}{" "}
                    <br />{" "}
                    {eng_lang.claim_attribute_set.section_two.hover_descr_2}
                  </p>
                  <button
                    className="btn btn-primary opensea-btn me-1"
                    onClick={handleOpenSeaUrl.bind(this, cat.index)}
                  >
                    {eng_lang.buttonConstants.view_on_open_sea}
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className={`col-lg-4 col-md-6 card-size `}
                onClick={handleSelectedCat.bind(this, cat)}
              >
                <img src={cat?.imagePath} alt="cat" tabIndex="0" />
              </div>
            );
          }
        })}

      {loading && (
        <>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </>
      )}
    </>
  );
};

export default CardSection;
