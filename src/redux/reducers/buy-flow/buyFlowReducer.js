import { types } from "../../types";

const initialState = {
  buyInProgress: false,
};

const voucherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BUY_IN_PROGRESS:
      return {
        ...state,
        buyInProgress: action.payload,
      };
    case types.BUY_NFT:
      return {
        ...state,
        // voucherLoading: action.payload,
      };
    default:
      return state;
  }
};
export default voucherReducer;
