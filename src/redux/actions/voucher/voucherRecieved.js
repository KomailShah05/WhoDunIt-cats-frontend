import { types } from "../../types";

const voucherRecievedAction = (recieved) => {
  return function (dispatch) {
    dispatch({
      type: types.VOUCHER_RECIEVED,
      payload: recieved,
    });
  };
};
export default voucherRecievedAction;
