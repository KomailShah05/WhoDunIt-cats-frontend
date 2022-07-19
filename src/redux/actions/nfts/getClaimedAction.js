// axios methods
import { getRequest } from "../../../services/axiosMethod";

// action types
import { types } from "../../types";

// constants
import { api_routes } from "../../../lib/utills/constants";

const getClaimedAmountAction = () => {
  return async function (dispatch) {
    try {
      // api call to get total claimed nfts
      let response = await getRequest(api_routes.CLAIMED_COUNT);
      response && dispatch(getClaimedAmountSuccess(response.data.totalClaimed));
    } catch (err) {
      console.log(err);
    }
  };
};

const getClaimedAmountSuccess = (totalClaimed) => {
  return function (dispatch) {
    dispatch({
      type: types.CLAIM_NFT_AMOUNT,
      payload: totalClaimed,
    });
  };
};

// const getMintedTokenFailure = () => {
//   return function (dispatch) {
//     dispatch({
//       type: types.MINTED_NFTS_COUNT,
//       payload: 0,
//     });
//   };
// };

export default getClaimedAmountAction;
