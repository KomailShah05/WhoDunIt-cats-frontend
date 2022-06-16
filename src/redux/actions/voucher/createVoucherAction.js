// axios methods
import { postRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// actions
import { voucherLoading } from "./index";

// constants
import { api_routes } from "../../../lib/utills/constants";

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
    var element = document.getElementById("smallModal");
    element.classList.add("d-block");
    element.classList.add("show");
    dispatch(voucherLoading(false));
  };
};

const createVoucherFailure = () => {
  return function (dispatch) {
    dispatch({
      type: types.CREATE_VOUCHER,
      payload: {},
    });
    dispatch(voucherLoading(false));
  };
};

export default createNewVoucher;
