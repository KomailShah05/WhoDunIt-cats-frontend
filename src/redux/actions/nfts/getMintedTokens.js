// axios methods
import { getRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// constants
import { api_routes } from "../../../lib/utills/constants";

const getMintedTokens = () => {
  return async function (dispatch) {
    try {
      // api call to get total tokent minted
      let response = await getRequest(api_routes.MINTED_COUNT);
      if (response) dispatch(getMintedTokenSuccess(response.data.totalMinted));
    } catch (err) {
      console.log("err****", err);
      dispatch(getMintedTokenFailure());
    }
  };
};

const getMintedTokenSuccess = (totalMinted) => {
  return function (dispatch) {
    dispatch({
      type: types.MINTED_NFTS_COUNT,
      payload: totalMinted,
    });
  };
};

const getMintedTokenFailure = () => {
  return function (dispatch) {
    dispatch({
      type: types.MINTED_NFTS_COUNT,
      payload: 0,
    });
  };
};

export default getMintedTokens;
