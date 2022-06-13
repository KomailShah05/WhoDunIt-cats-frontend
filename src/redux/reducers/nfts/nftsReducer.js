import { types } from "../../types";

const initialState = {
  totalMinted: 0,
};

const nftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MINTED_NFTS_COUNT:
      return {
        ...state,
        totalMinted: action.payload,
      };
    default:
      return state;
  }
};
export default nftsReducer;
