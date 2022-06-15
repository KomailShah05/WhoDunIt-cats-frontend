// axios methods
import { postRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// constants
import { api_routes } from "../../../lib/utills/constants";
import { notfiFail } from "../../../lib/helper/toast";

const createNewVoucher = (walletAddress) => {
  return async function (dispatch) {
    try {
      const payload = {
        walletAddress,
      };
      // api call to get total tokent minted
      let response = await postRequest(api_routes.CREATE_VOUCHER, payload);
      console.log(api_routes.CREATE_VOUCHER, "  :", response);
      if (response) dispatch(createVoucherSuccess(response.data));
    } catch (err) {
      console.log(api_routes.CREATE_VOUCHER, "  :", err);
      dispatch(createVoucherFailure(err.message));
    }
  };
};

const createVoucherSuccess = (voucher) => {
  return function (dispatch) {
    // dispatch({
    //   type: types.MINTED_NFTS_COUNT,
    //   payload: totalMinted,
    // });
  };
};

const createVoucherFailure = (message) => {
  return function (dispatch) {
    notfiFail(message);
    // dispatch({
    //   type: types.MINTED_NFTS_COUNT,
    //   payload: 0,
    // });
  };
};

export default createNewVoucher;
