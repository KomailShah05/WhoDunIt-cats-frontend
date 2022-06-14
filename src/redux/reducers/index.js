// libraries
import { combineReducers } from "redux";

// reducers
import nftsReducer from "./nfts/nftsReducer";
import metaMaskWalletReducer from "./blockchain/metaMaskWalletReducer";

export default combineReducers({ nftsReducer, metaMaskWalletReducer });
