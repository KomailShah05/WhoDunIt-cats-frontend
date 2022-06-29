import { types } from "../../types";

const suspectBtnLoading = (loading) => {
  return function (dispatch) {
    dispatch({
      type: types.CLAIM_SUSPECT_LOADING,
      payload: loading,
    });
  };
};
export default suspectBtnLoading;
