// libraries
import React, { useEffect, useState } from "react";

// components
import { FilterSuspectTrait, Select, Card } from "..";

// constants
import { eng_lang, api_routes } from "../../../lib/utills/constants";
import { postRequest } from "../../../services/axiosMethod";

// styles
import "./style.scss";

// assets
import { CatOnePng } from "../../../assets";

const AttributeSection = () => {
  const selections = eng_lang.claim_attribute_set.section_one.select_data;

  const [page, setpage] = useState(1);
  const [suspectedCats, setsuspectedCats] = useState([]);

  // get suspected cat
  const getSuspectedCats = async () => {
    console.log("page", page);
    try {
      const payload = {
        // height: "",
        // eyes: "",
        // skin: "",
        // hats: "",
        // shirts: "",
      };
      const resp = await postRequest(
        `${api_routes.SUSPECT_CATS}${page}&pageSize=${eng_lang.pageSize}`,
        payload
      );

      if (resp) {
        let tempArr = [];
        tempArr = [...suspectedCats, ...resp?.data?.suspectedCats];
        setsuspectedCats(tempArr);
      }
    } catch (error) {
      console.log(api_routes.SUSPECT_CATS, " error", error);
    }
  };

  // Call function when scroll reachec on bottom of screen
  const handleScroll = async () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) <
      document.documentElement.offsetHeight
    )
      return;
    setpage(page + 1);
  };

  // call api on page state change
  useEffect(() => {
    getSuspectedCats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // add event listener on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <div className="container-xl">
    <div className="row attribute gx-0 mx-auto">
      <div className=" col-md-3 d-flex flex-column align-items-center">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_one.title}
          index={1}
          fill={true}
        />
        <div className="attribute__min-width">
          {selections.map((item) => (
            <Select heading={item.attribute_name} options={item.options} />
          ))}
        </div>
      </div>
      <div className="col-md-6">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_two.title}
          index={2}
          fill={true}
        />
        <div className="row w-100 suspects ">
          <Card suspectedCats={suspectedCats} />
        </div>
      </div>
      <div className="col-md-3">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_three.title}
          index={3}
          fill={true}
        />
        <div className="d-flex justify-content-center justify-content-lg-start">
          <img className="selected-cat" src={CatOnePng} alt="cat" />
        </div>

        <div className="d-flex justify-content-between metadata-nft">
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.serial_number}
          </p>
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.serial_value}
          </p>
        </div>
        <div className="d-flex  justify-content-between  metadata-nft">
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.plank_number}
          </p>
          <p className="text-white">
            {eng_lang.claim_attribute_set.section_three.plank_value}
          </p>
        </div>

        <button
          className="btn btn-primary mint-btn"
          data-mdb-ripple-color="primary"
          data-bs-toggle="modal"
          data-bs-target="#smallModalCongrats"
        >
          {eng_lang.buttonConstants.mint_suspect}
        </button>
      </div>
    </div>
    // </div>
  );
};

export default AttributeSection;
