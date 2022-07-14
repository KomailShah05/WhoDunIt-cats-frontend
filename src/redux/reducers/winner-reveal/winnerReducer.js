import { types } from "../../types";

const initialState = {
  winner: {},
};

const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WINNER_REVEAL:
      return {
        ...state,
        winner: action.payload,
      };

    default:
      return state;
  }
};
export default winnerReducer;
