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
      console.log(response);
    } catch (err) {
      console.log("error: ", err);
    }
  };
};

const saveWinnerStatus = (success) => {
  return function (dispatch) {
    dispatch({
      type: types.WINNER_REVEAL,
      payload: success,
    });
  };
};

export default getWinnerAction;
