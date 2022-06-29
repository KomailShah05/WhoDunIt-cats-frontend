import { types } from "../../types";

const initialState = {
  btnLoading: false,
};

const claimReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLAIM_SUSPECT_LOADING:
      return {
        ...state,
        btnLoading: action.payload,
      };

    default:
      return state;
  }
};
export default claimReducer;
