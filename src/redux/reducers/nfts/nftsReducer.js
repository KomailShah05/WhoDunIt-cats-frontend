import { types } from "../../types";

const initialState = {
  totalMinted: 0,
  btnLoading: false,
  showModal: "",
};

const nftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MINTED_NFTS_COUNT:
      return {
        ...state,
        totalMinted: action.payload,
      };
    case types.CONNECT_WALLET_BTN_LOADING:
      return {
        ...state,
        btnLoading: action.payload,
      };
    case types.SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    default:
      return state;
  }
};
export default nftsReducer;
