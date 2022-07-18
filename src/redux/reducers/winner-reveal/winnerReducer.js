import { types } from "../../types";

const initialState = {
  isWinner: false,
  winnerData: {},
};

const winnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WINNER_REVEAL:
      return {
        ...state,
        winnerData: action.payload,
      };
    case types.WINNER_STATUS:
      return {
        ...state,
        isWinner: action.payload,
      };

    default:
      return state;
  }
};
export default winnerReducer;
