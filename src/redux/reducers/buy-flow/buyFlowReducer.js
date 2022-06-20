import { types } from "../../types";

const initialState = {
  buyInProgress: false,
  buyError: {
    error: false,
    errorType: "",
    errorMsg: "",
  },
};

const buyReducer = (state = initialState, action) => {
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
    case types.BUY_ERROR:
      return {
        ...state,
        buyError: {
          error: action.payload.error,
          errorType: action.payload.errorType,
          errorMsg: action.payload.errorMsg,
        },
      };
    default:
      return state;
  }
};
export default buyReducer;
