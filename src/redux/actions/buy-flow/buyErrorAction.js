import { types } from "../../types";
import { eng_lang } from "../../../lib/utills/constants";

const buyErrorAction = (error) => {
  return function (dispatch) {
    if (error?.receipt?.status === false) {
      dispatch({
        type: types.BUY_ERROR,
        payload: {
          error: true,
          errorType: eng_lang.transaction_failed,
          errorMsg: eng_lang.transaction_failed_evm,
        },
      });
      return;
    }
    if (error?.code === 4001) {
      dispatch({
        type: types.BUY_ERROR,
        payload: {
          error: true,
          errorType: eng_lang.transaction_failed,
          errorMsg: error.message,
        },
      });
      return;
    }
    dispatch({
      type: types.BUY_ERROR,
      payload: {
        error: true,
        errorType: eng_lang.transaction_failed,
        errorMsg: "ERROR",
      },
    });
  };
};

const insufficientBalanceAction = (balance_eth, nftPrice) => {
  return function (dispatch) {
    dispatch({
      type: types.BUY_ERROR,
      payload: {
        error: true,
        errorType: eng_lang.insufficient_fund,
        errorMsg: `Nft price is ${nftPrice?.toFixed(
          4
        )} and your balance ${balance_eth}`,
      },
    });
  };
};

const newNftMintApiError = (error) => {
  return function (dispatch) {
    dispatch({
      type: types.BUY_ERROR,
      payload: {
        error: true,
        errorType: eng_lang.transaction_failed,
        errorMsg: error?.response?.data?.error,
      },
    });
  };
};

const buyErrorSolved = () => {
  return function (dispatch) {
    dispatch({
      type: types.BUY_ERROR,
      payload: {
        error: false,
        errorType: "",
        errorMsg: "",
      },
    });
  };
};

const resetTokenAndMint = () => {
  return function (dispatch) {
    dispatch({
      type: types.MINT_SUCCESFULL,
      payload: false,
    });
    dispatch({
      type: types.TOKEN_ID,
      payload: "",
    });
  };
};
export {
  insufficientBalanceAction,
  buyErrorAction,
  buyErrorSolved,
  newNftMintApiError,
  resetTokenAndMint,
};
