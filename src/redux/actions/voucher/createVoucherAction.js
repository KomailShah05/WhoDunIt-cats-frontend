// axios methods
import { postRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// actions
import { voucherLoading } from "./index";
import { showModalAction } from "../nfts";

// constants
import { api_routes, eng_lang } from "../../../lib/utills/constants";

const createNewVoucher = (walletAddress) => {
  return async function (dispatch) {
    try {
      const payload = {
        walletAddress,
      };
      dispatch(voucherLoading(true));
      // api call to get total tokent minted
      let response = await postRequest(api_routes.CREATE_VOUCHER, payload);
      if (response) dispatch(createVoucherSuccess(response.data));
    } catch (err) {
      dispatch(createVoucherFailure());
    }
  };
};

const createVoucherSuccess = (voucher) => {
  return function (dispatch) {
    dispatch({
      type: types.CREATE_VOUCHER,
      payload: voucher,
    });
    dispatch(showModalAction(eng_lang.buyModal));
    dispatch(voucherLoading(false));
  };
};

const createVoucherFailure = () => {
  return function (dispatch) {
    dispatch({
      type: types.CREATE_VOUCHER,
      payload: {},
    });
    dispatch(showModalAction(eng_lang.conncetToBuy));

    dispatch(voucherLoading(false));
  };
};

export default createNewVoucher;
