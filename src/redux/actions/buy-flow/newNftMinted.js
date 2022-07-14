import { types } from "../../types";
// import { api_routes } from "../../../lib/utills/constants";
// import { postRequest } from "../../../services/axiosMethod";
import {
  buyInProgressAction,
  //  newNftMintApiError,
  buyErrorSolved,
} from ".";
import { getMintedTokens } from "../nfts";

const newNftMinted = (respBlk) => {
  return async function (dispatch) {
    // try {
    //   const payload = {
    //     walletAddress,
    //   };

    //   // const resp = await postRequest(api_routes.NEW_NFT_MINTED, payload);
    //   // if (resp) {
    //   dispatch(newNftMintedSuccess(resp, respBlk));
    //   // }
    // } catch (error) {
    //   dispatch(newNftMintedFail(error));
    // }
    dispatch({
      type: types.MINT_SUCCESFULL,
      payload: true,
    });
    dispatch({
      type: types.TOKEN_ID,
      payload: respBlk?.events?.Transfer?.returnValues?.tokenId,
    });
    dispatch(buyErrorSolved());
    dispatch(buyInProgressAction(false));
    dispatch(getMintedTokens());
  };
};
// const newNftMintedSuccess = (response, respBlk) => {
//   return function (dispatch) {
//     // dispatch({
//     //   type: types.NEW_NFT_MINTED,
//     //   payload: response,
//     // });
//     dispatch({
//       type: types.MINT_SUCCESFULL,
//       payload: true,
//     });
//     dispatch({
//       type: types.TOKEN_ID,
//       payload: respBlk?.events?.Transfer?.returnValues?.tokenId,
//     });
//     dispatch(buyErrorSolved());
//     dispatch(buyInProgressAction(false));
//     dispatch(getMintedTokens());
//   };
// };
// const newNftMintedFail = (error) => {
//   return function (dispatch) {
//     dispatch({
//       type: types.NEW_NFT_MINTED,
//       payload: {},
//     });
//     dispatch({
//       type: types.MINT_SUCCESFULL,
//       payload: false,
//     });
//     dispatch({
//       type: types.TOKEN_ID,
//       payload: "",
//     });
//     dispatch(buyInProgressAction(false));
//     dispatch(newNftMintApiError(error));
//   };
// };

export default newNftMinted;
