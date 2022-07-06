// libraries
import React, { useEffect, useState, useRef, useContext } from "react";

// components
import { FilterSuspectTrait, Select, CardSection } from "..";

// constants
import { eng_lang, api_routes } from "../../../lib/utills/constants";
import { postRequest } from "../../../services/axiosMethod";
import { EtheriumContext } from "../../../services/etherium-blockchain/EtheriumProvider";

// styles
import "./style.scss";

// assets

const AttributeSection = ({ btnLoading, callApi }) => {
  const selections = eng_lang.claim_attribute_set.section_one.select_data;
  const { personalSign } = useContext(EtheriumContext);
  const suspectSection = useRef();
  const [page, setpage] = useState(1);
  const [pageNotCall, setpageNotCall] = useState(false);
  const [render, setrender] = useState(true);
  const [suspectedCats, setsuspectedCats] = useState([]);
  const [loading, setloading] = useState(false);
  const [lenght, setlenght] = useState(eng_lang.pageSize);
  const [selectedCat, setselectedCat] = useState(null);
  const [selectedAttributes, setselectedAttributes] = useState({
    height: null,
    eyes: null,
    skin: null,
    hats: null,
    shirts: null,
  });

  // get suspected cat
  const getSuspectedCats = async (pageNumber, previousSuspectedCats) => {
    try {
      let payload = selectedAttributes;

      // Removing null keys from object
      payload = Object.fromEntries(
        Object.entries(payload).filter(([_, v]) => v != null)
      );
      setloading(true);
      const resp = await postRequest(
        `${api_routes.SUSPECT_CATS}${pageNumber}&pageSize=${eng_lang.pageSize}`,
        payload
      );

      if (resp) {
        setloading(false);
        setpageNotCall(false);
        setlenght(resp?.data?.length);
        let tempArr = [];
        tempArr = [...previousSuspectedCats, ...resp?.data?.suspectedCats];
        setsuspectedCats(tempArr);
      }
    } catch (error) {
      setloading(false);
      setpageNotCall(false);
      setlenght(0);
      console.log(api_routes.SUSPECT_CATS, "error", error);
    }
  };

  // call api on page state change
  useEffect(() => {
    if (!pageNotCall) {
      getSuspectedCats(page, suspectedCats);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setpage(1);
    setselectedCat(null);
    setpageNotCall(true);
    setrender(false);
    if (!render) {
      getSuspectedCats(1, []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttributes, callApi]);

  const handleScrollEvent = (event) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const scroll = scrollHeight - scrollTop - clientHeight;
    if (scroll <= 4) {
      // We are at the bottom
      if (lenght === eng_lang.pageSize && loading === false) {
        setpage(page + 1);
      }
    }
  };

  return (
    <div className="row attribute gx-0 mx-auto mb-max-screen">
      <div className=" col-lg-3 d-flex flex-column align-items-center">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_one.title}
          index={1}
          fill={true}
        />
        <div className="attribute__min-width">
          {selections.map((item, index) => (
            <Select
              key={index}
              index={index}
              heading={item.attribute_name}
              options={item.options}
              element_name={item.element_name}
              selectedAttributes={selectedAttributes}
              setselectedAttributes={setselectedAttributes}
              loading={loading}
            />
          ))}
        </div>
      </div>
      <div className="col-lg-6">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_two.title}
          index={2}
          fill={true}
        />
        <div
          ref={suspectSection}
          className="row w-100 suspects"
          onScroll={handleScrollEvent}
        >
          <CardSection
            suspectedCats={suspectedCats}
            setselectedCat={setselectedCat}
            loading={loading}
          />
        </div>
      </div>
      <div className="col-lg-3">
        <FilterSuspectTrait
          title={eng_lang.claim_attribute_set.section_three.title}
          index={3}
          fill={true}
        />
        {selectedCat && (
          <>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <img
                className="selected-cat"
                src={selectedCat?.imagePath}
                alt="cat"
              />
            </div>

            <div className="d-flex justify-content-between metadata-nft">
              <p className="text-white">
                {eng_lang.claim_attribute_set.section_three.serial_number}
              </p>
              <p className="text-white">
                {/* {eng_lang.claim_attribute_set.section_three.serial_value}{" "} */}
                {selectedCat?.index}
              </p>
            </div>
            <div className="d-flex  justify-content-between  metadata-nft">
              <p className="text-white">
                {eng_lang.claim_attribute_set.section_three.plank_number}
              </p>
              <p className="text-white">{selectedCat?.plackNumber}</p>
            </div>
            <div className="btn-container mint-btn-container d-flex justify-content-center position-relative mx-auto">
              <span className="mas mas-mint">
                {eng_lang.buttonConstants.mint_suspect}
              </span>
              <button
                className="btn btn-primary mint-btn "
                data-mdb-ripple-color="primary"
                onClick={() => personalSign(selectedCat)}
                disabled={btnLoading}
              >
                {eng_lang.buttonConstants.mint_suspect}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AttributeSection;
