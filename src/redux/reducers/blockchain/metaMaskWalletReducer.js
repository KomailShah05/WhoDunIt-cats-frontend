import { types } from "../../types";

const initialState = {
  walletConnected: false,
  walletAddress: null,
};

const metaMaskWalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_WALLET_CONNECTED:
      return {
        ...state,
        walletConnected: action.payload,
      };
    case types.WALLET_ADDRESS:
      return {
        ...state,
        walletAddress: action.payload,
      };
    default:
      return state;
  }
};
export default metaMaskWalletReducer;
