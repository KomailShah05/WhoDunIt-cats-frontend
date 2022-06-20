// axios methods
import { postRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// actions
import { buyInProgressAction } from ".";

// constants
import { api_routes } from "../../../lib/utills/constants";

const buyNftAction = (walletAddress) => {
  return async function (dispatch) {
    try {
      const payload = {
        walletAddress,
      };
      dispatch(buyInProgressAction(true));
      // api call to get total tokent minted
      let response = await postRequest(api_routes.CREATE_VOUCHER, payload);
      if (response) dispatch(buyNftSuccess(response.data));
    } catch (err) {
      dispatch(buyNftFail());
    }
  };
};

const buyNftSuccess = (nft) => {
  return function (dispatch) {
    dispatch({
      type: types.BUY_NFT,
      payload: nft,
    });

    dispatch(buyInProgressAction(false));
  };
};

const buyNftFail = () => {
  return function (dispatch) {
    dispatch({
      type: types.CREATE_VOUCHER,
      payload: {},
    });
    dispatch(buyInProgressAction(false));
  };
};

export default buyNftAction;
