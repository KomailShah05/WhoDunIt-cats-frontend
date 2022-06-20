import { types } from "../../types";

const buyInProgressAction = (loading) => {
  return function (dispatch) {
    dispatch({
      type: types.BUY_IN_PROGRESS,
      payload: loading,
    });
  };
};
export default buyInProgressAction;
