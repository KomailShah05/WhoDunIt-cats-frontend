import { types } from "../../types";

const initialState = {};

const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WINNER_REVEAL:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};
export default winnerReducer;
