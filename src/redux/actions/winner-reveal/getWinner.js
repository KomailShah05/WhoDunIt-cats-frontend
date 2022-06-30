// axios methods
import { getRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// constants
import { api_routes } from "../../../lib/utills/constants";

const getWinner = () => {
  return async function (dispatch) {
    try {
      // api call to get total tokent minted
      let response = await getRequest(api_routes.WINNER_REVEAL);
      if (response) dispatch(saveWinnerStatus(response.data.success));
      console.log(response.data.success);
    } catch (err) {
      console.log("error: ", err.response.status);
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

export default getWinner;
