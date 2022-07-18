// axios methods
import { getRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// constants
import { api_routes } from "../../../lib/utills/constants";

const getWinnerAction = () => {
  return async function (dispatch) {
    try {
      // api call to get total tokent minted
      let response = await getRequest(api_routes.WINNER_REVEAL);
      if (response) dispatch(saveWinnerStatus(response));
    } catch (err) {
      dispatch(saveWinnerFail());
    }
  };
};

const saveWinnerStatus = (success) => {
  return function (dispatch) {
    dispatch({
      type: types.WINNER_REVEAL,
      payload: success,
    });
    dispatch({
      type: types.WINNER_STATUS,
      payload: true,
    });
  };
};

const saveWinnerFail = () => {
  return function (dispatch) {
    dispatch({
      type: types.WINNER_REVEAL,
      payload: {},
    });

    dispatch({
      type: types.WINNER_STATUS,
      payload: false,
    });
  };
};

export default getWinnerAction;
