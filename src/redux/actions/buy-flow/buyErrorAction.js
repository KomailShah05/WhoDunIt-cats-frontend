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

const insufficientBalanceAction = () => {
  return function (dispatch) {
    dispatch({
      type: types.BUY_ERROR,
      payload: {
        error: true,
        errorType: eng_lang.insufficient_fund,
        errorMsg: eng_lang.insufficient_fund_msg,
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
    dispatch({
      type: types.MINT_SUCCESFULL,
      payload: false,
    });
  };
};

export {
  insufficientBalanceAction,
  buyErrorAction,
  buyErrorSolved,
  newNftMintApiError,
};
