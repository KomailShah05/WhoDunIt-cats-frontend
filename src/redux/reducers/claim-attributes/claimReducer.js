import { types } from "../../types";

const initialState = {
  btnLoading: false,
  displayModal: "",
  errMsg: "",
  nftIndex: "",
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
    case types.NFT_INDEX:
      return {
        ...state,
        nftIndex: action.payload,
      };
    case types.ERROR_MSG:
      return {
        ...state,
        errMsg: action.payload,
      };

    default:
      return state;
  }
};
export default claimReducer;
