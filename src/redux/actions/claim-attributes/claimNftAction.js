// axios methods
import { postRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// actions
import { suspectBtnLoading } from ".";

// constants
import { api_routes } from "../../../lib/utills/constants";

const claimNftAction = (walletAddress, signature, claimNft) => {
  return async function (dispatch) {
    try {
      const payload = {
        walletAddress,
        id: claimNft?._id,
        signature,
        message: "",
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
    dispatch({
      type: types.BUY_NFT,
      payload: nft,
    });

    dispatch(suspectBtnLoading(false));
  };
};

const claimNftFail = () => {
  return function (dispatch) {
    dispatch({
      type: types.CREATE_VOUCHER,
      payload: {},
    });
    dispatch(suspectBtnLoading(false));
  };
};

export default claimNftAction;
