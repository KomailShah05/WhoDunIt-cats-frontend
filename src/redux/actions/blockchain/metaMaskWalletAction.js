// axios methods
import { postRequest } from "../../../services/axiosMethod";

// types
import { types } from "../../types";

// actions
import { btnLoadingAction } from "../nfts";

// constants
import { api_routes } from "../../../lib/utills/constants";

const metaMaskWalletConnected = (walletAddress) => {
  return async function (dispatch) {
    try {
      const payload = {
        walletAddress,
        nftTemplateUrl: "myurl/1",
      };
      // api call to mint new nft
      const resp = await postRequest(api_routes.NEW_NFT_MINTED, payload);
      if (resp) {
        dispatch(walletConnectedSuccess(walletAddress));
        dispatch(btnLoadingAction(false));
      }
    } catch (error) {
      dispatch(walletConnectedFail());
      dispatch(btnLoadingAction(false));
    }
  };
};

const walletConnectedSuccess = (walletAddress) => {
  return function (dispatch) {
    dispatch({
      type: types.WALLET_ADDRESS,
      payload: walletAddress,
    });
    dispatch({
      type: types.SET_WALLET_CONNECTED,
      payload: true,
    });
  };
};

const walletConnectedFail = () => {
  return function (dispatch) {
    dispatch({
      type: types.WALLET_ADDRESS,
      payload: null,
    });
    dispatch({
      type: types.SET_WALLET_CONNECTED,
      payload: false,
    });
  };
};

export { metaMaskWalletConnected, walletConnectedFail };
