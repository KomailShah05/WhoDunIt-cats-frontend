// libraries
import { createContext, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3/dist/web3.min";
import storage from "redux-persist/lib/storage";

// components
import { notfiFail } from "../../lib/helper/toast";

// blockchain functions
import {
  connectToMetaMask,
  buyNftMetaMask,
  networkDetails,
  getAccountBalance,
  convertFromWei,
  getAccountAddress,
} from "./functions";

// actions
import { btnLoadingAction } from "../../redux/actions/nfts";
import {
  metaMaskWalletConnected,
  walletConnectedFail,
} from "../../redux/actions/blockchain";
import {
  buyInProgressAction,
  buyErrorAction,
  insufficientBalanceAction,
} from "../../redux/actions/buy-flow";

// constants
import BLOCKCHAIN_INTERFACES from "../../lib/utills/constants/blockchain-interfaces";
import { WALLET_ADDRESS, WALLET_NAME } from "../../enviroments";
import { eng_lang } from "../../lib/utills/constants";

export const EtheriumContext = createContext({});

const EtheriumProvider = ({ children }) => {
  const dispatch = useDispatch();
  const {
    voucherReducer: { voucher },
    metaMaskWalletReducer: { walletAddress },
  } = useSelector((state) => state);
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

  // initiate our web 3 with wallet address
  const tokenInstance = new web3.eth.Contract(
    BLOCKCHAIN_INTERFACES,
    WALLET_ADDRESS
  );

  useEffect(() => {
    checkUserLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  const checkUserLogin = async () => {
    const resp = await getAccountAddress(web3);
    if (resp.length === 0) {
      storage.removeItem("persist:root");
      return false;
    }
    return true;
  };

  // connect with metamask wallet
  const walletConnection = useCallback(async () => {
    try {
      dispatch(btnLoadingAction(true));
      const resp = await connectToMetaMask();
      if (resp?.length > 0) {
        dispatch(metaMaskWalletConnected(resp[0]));
      }
    } catch (error) {
      dispatch(btnLoadingAction(false));
      dispatch(walletConnectedFail());
      notfiFail(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buyNft = useCallback(async () => {
    try {
      //  diable buy button
      dispatch(buyInProgressAction(true));

      const isUserLogin = await checkUserLogin();

      // checking network name
      const networkName = await networkDetails(web3);

      // check if blockchain name is renkeby
      if (networkName !== WALLET_NAME) {
        notfiFail(eng_lang.contract_type_msg);
      }

      if (networkName !== WALLET_NAME || !isUserLogin) {
        dispatch(buyInProgressAction(false));
        return;
      }
      // get account balance
      const accBalance = await getAccountBalance(web3, walletAddress);

      if (accBalance) {
        const balance_eth = convertFromWei(web3, accBalance, "ether");
        if (balance_eth < voucher.amountInEther) {
          dispatch(insufficientBalanceAction());
          return;
        }
      }

      //  network name must be rinkeby
      const resp = await buyNftMetaMask(tokenInstance, walletAddress, voucher);
      if (resp) {
        dispatch(buyInProgressAction(false));
      }
    } catch (error) {
      dispatch(buyErrorAction(error));
      dispatch(buyInProgressAction(false));
      // notfiFail(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  return (
    <EtheriumContext.Provider
      value={{
        walletConnection,
        buyNft,
      }}
    >
      {children}
    </EtheriumContext.Provider>
  );
};

export default EtheriumProvider;
