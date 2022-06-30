import { types } from "../../types";

const displayModalAction = (modalName) => {
  return function (dispatch) {
    dispatch({
      type: types.DISPAY_MODAL,
      payload: modalName,
    });
  };
};
export default displayModalAction;
