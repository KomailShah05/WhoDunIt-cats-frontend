import { types } from "../../types";

const initialState = {
  success: false,
};

const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WINNER_REVEAL:
      return {
        ...state,
        success: action.payload,
      };

    default:
      return state;
  }
};
export default winnerReducer;
