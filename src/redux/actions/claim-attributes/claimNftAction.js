// libraries
import axios from "axios";

// axios methods
import { postRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// actions
import { suspectBtnLoading, displayModalAction } from ".";

// constants
import { api_routes, eng_lang } from "../../../lib/utills/constants";
import { OPEN_SEA_REFRESH_API } from "../../../enviroments";

const claimNftAction = (walletAddress, signature, claimNft, dataToSign) => {
  return async function (dispatch) {
    try {
      const payload = {
        walletAddress,
        id: claimNft?._id,
        signature,
        message: dataToSign,
      };

      // api call to get total tokent minted
      let response = await postRequest(api_routes.CLAIM_CAT, payload);

      if (response) {
        let openSeaResponse = await axios.get(
          `${OPEN_SEA_REFRESH_API}${response.data?.Nft}/?force_update=true`
        );

        if (openSeaResponse) {
          dispatch(claimNftSuccess(response.data?.Nft));
        }
      }
    } catch (err) {
      dispatch(claimNftFail(err?.response?.data?.error));
    }
  };
};

const claimNftSuccess = (nftIndex) => {
  return function (dispatch) {
    dispatch({
      type: types.NFT_INDEX,
      payload: nftIndex,
    });
    dispatch(displayModalAction(eng_lang.claim_nft));
    dispatch(suspectBtnLoading(false));
  };
};

const claimNftFail = (message) => {
  return function (dispatch) {
    dispatch({
      type: types.NFT_INDEX,
      payload: 0,
    });
    dispatch({
      type: types.ERROR_MSG,
      payload: message,
    });
    dispatch(displayModalAction(eng_lang.dont_claim_nft));
    dispatch(suspectBtnLoading(false));
  };
};

export default claimNftAction;
