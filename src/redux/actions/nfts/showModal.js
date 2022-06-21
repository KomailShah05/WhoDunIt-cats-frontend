import { types } from "../../types";

const showModalAction = (modalName) => {
  return function (dispatch) {
    dispatch({
      type: types.SHOW_MODAL,
      payload: modalName,
    });
  };
};

export default showModalAction;
