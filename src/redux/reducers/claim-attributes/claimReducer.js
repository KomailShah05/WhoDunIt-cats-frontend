import { types } from "../../types";

const initialState = {
  btnLoading: false,
  displayModal: "",
};

const claimReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLAIM_SUSPECT_LOADING:
      return {
        ...state,
        btnLoading: action.payload,
      };
    case types.DISPAY_MODAL:
      return {
        ...state,
        displayModal: action.payload,
      };
    default:
      return state;
  }
};
export default claimReducer;
