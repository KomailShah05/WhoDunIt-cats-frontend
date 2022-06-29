// libraries
import { combineReducers } from "redux";

// reducers
import nftsReducer from "./nfts/nftsReducer";
import metaMaskWalletReducer from "./blockchain/metaMaskWalletReducer";
import voucherReducer from "./voucher/voucherReducer";
import buyReducer from "./buy-flow/buyFlowReducer";
import claimReducer from "./claim-attributes/claimReducer";

export default combineReducers({
  nftsReducer,
  metaMaskWalletReducer,
  voucherReducer,
  buyReducer,
  claimReducer,
});
