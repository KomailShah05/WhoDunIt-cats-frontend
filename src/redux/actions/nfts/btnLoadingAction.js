import { types } from "../../types";

const btnLoadingAction = (loading) => {
  return function (dispatch) {
    dispatch({
      type: types.CONNECT_WALLET_BTN_LOADING,
      payload: loading,
    });
  };
};

export default btnLoadingAction;
