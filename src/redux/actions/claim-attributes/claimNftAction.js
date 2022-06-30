// axios methods
import { postRequest } from "../../../services/axiosMethod";

// action types
// import { types } from "../../types";

// actions
import { suspectBtnLoading, displayModalAction } from ".";

// constants
import { api_routes, eng_lang } from "../../../lib/utills/constants";

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
      console.log("api response", response);
      if (response) dispatch(claimNftSuccess(response.data));
    } catch (err) {
      dispatch(claimNftFail());
    }
  };
};

const claimNftSuccess = (nft) => {
  return function (dispatch) {
    dispatch(displayModalAction(eng_lang.claim_nft));
    dispatch(suspectBtnLoading(false));
  };
};

const claimNftFail = () => {
  return function (dispatch) {
    dispatch(displayModalAction(eng_lang.dont_claim_nft));
    dispatch(suspectBtnLoading(false));
  };
};

export default claimNftAction;
