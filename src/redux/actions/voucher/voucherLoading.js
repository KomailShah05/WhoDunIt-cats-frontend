import { types } from "../../types";

const voucherLoading = (loading) => {
  return function (dispatch) {
    dispatch({
      type: types.VOUCHER_LOADING,
      payload: loading,
    });
  };
};
export default voucherLoading;
