import { types } from "../../types";
import { api_routes } from "../../../lib/utills/constants";
import { postRequest } from "../../../services/axiosMethod";
import { buyInProgressAction, newNftMintApiError } from ".";

const newNftMinted = (walletAddress) => {
  return async function (dispatch) {
    try {
      const payload = {
        walletAddress,
      };
      const resp = await postRequest(api_routes.NEW_NFT_MINTED, payload);
      if (resp) {
        dispatch(newNftMintedSuccess(resp));
      }
    } catch (error) {
      dispatch(newNftMintedFail(error));
    }
  };
};
const newNftMintedSuccess = (response) => {
  return function (dispatch) {
    dispatch({
      type: types.NEW_NFT_MINTED,
      payload: response,
    });
    dispatch({
      type: types.MINT_SUCCESFULL,
      payload: true,
    });
    dispatch(buyInProgressAction(false));
  };
};
const newNftMintedFail = (error) => {
  return function (dispatch) {
    dispatch({
      type: types.NEW_NFT_MINTED,
      payload: {},
    });
    dispatch({
      type: types.MINT_SUCCESFULL,
      payload: false,
    });
    dispatch(buyInProgressAction(false));
    dispatch(newNftMintApiError(error));
  };
};

export default newNftMinted;
