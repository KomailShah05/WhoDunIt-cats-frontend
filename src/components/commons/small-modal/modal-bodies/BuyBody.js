// libraries
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// constants
import { eng_lang } from "../../../../lib/utills/constants";
import { createNewVoucher } from "../../../../redux/actions/voucher";
import calculateTimeLeft from "../../../../lib/helper/functions/calculateTimeLeft";

// assets
import { golden, Undeline } from "../../../../assets";

const BuyBody = ({ voucher, walletAddress }) => {
  const dispatch = useDispatch();
  const [minutes, setminutes] = useState(null);
  const handleVoucher = () => {
    dispatch(createNewVoucher(walletAddress));
  };
  useEffect(() => {
    if (document.getElementById("smallModal").classList.contains("show")) {
      const id = setTimeout(() => {
        setminutes(calculateTimeLeft(voucher.expire_at));
      }, 1000);

      return () => {
        clearTimeout(id);
      };
    }
  });
  useEffect(() => {
    if (minutes?.M === 0) {
      handleVoucher();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes]);
  return (
    <>
      <h2 className="text-white text-center">
        {eng_lang.buy_flow_modal.transaction_detail}
      </h2>
      <div className="sm-modal__body-margin">
        <div className="d-flex justify-content-between ">
          <p>{eng_lang.buy_flow_modal.nft_price}</p>
          <div className="d-flex flex-column align-items-end">
            <h5 className="text-white">{eng_lang.dollar}200</h5>
            <p>
              <img src={golden} alt={golden} />{" "}
              {voucher?.amountInEther?.toFixed(2) || 0} {eng_lang.eth}
            </p>
          </div>
        </div>
        {/* <div className="d-flex justify-content-between">
          <p>{eng_lang.buy_flow_modal.transaction_fee}</p>
          <h5 className="text-white">{eng_lang.dollar}200</h5>
        </div> */}
        <img src={Undeline} alt="Undeline" className="w-100" />
        <div className="d-flex justify-content-between ">
          <p>{eng_lang.buy_flow_modal.total_price}</p>
          <div className="d-flex flex-column align-items-end">
            <h5 className="text-white">{eng_lang.dollar}200</h5>
            <p>
              <img src={golden} alt={golden} />{" "}
              {voucher?.amountInEther?.toFixed(2) || 0} {eng_lang.eth}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyBody;
