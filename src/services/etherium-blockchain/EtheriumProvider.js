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
  newNftMinted,
} from "../../redux/actions/buy-flow";

// constants
import BLOCKCHAIN_INTERFACES from "../../lib/utills/constants/blockchain-interfaces";
import {
  CONTRACT_ADDRESS,
  WALLET_NAME,
  WEB3_PROVIDER_URL,
} from "../../enviroments";
import { eng_lang } from "../../lib/utills/constants";

export const EtheriumContext = createContext({});

const EtheriumProvider = ({ children }) => {
  const dispatch = useDispatch();
  const {
    voucherReducer: { voucher },
    metaMaskWalletReducer: { walletAddress },
  } = useSelector((state) => state);
  const web3 = new Web3(Web3.givenProvider || WEB3_PROVIDER_URL);

  // initiate our web 3 with wallet address
  const tokenInstance = new web3.eth.Contract(
    BLOCKCHAIN_INTERFACES,
    CONTRACT_ADDRESS
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
      // step -> 1 : diable buy button
      dispatch(buyInProgressAction(true));

      // step -> 2 : check user is logged in with wallet
      const isUserLogin = await checkUserLogin();

      if (!isUserLogin) {
        notfiFail(eng_lang.user_not_login);
      }

      // step -> 3 :  get network name
      const networkName = await networkDetails(web3);

      // step -> 4 :  check if blockchain name is renkeby
      if (networkName !== WALLET_NAME) {
        notfiFail(eng_lang.contract_type_msg);
      }

      // step -> 4 :  if network name is not rinkeyby or user not connected to metamask then return
      if (networkName !== WALLET_NAME || !isUserLogin) {
        dispatch(buyInProgressAction(false));
        return;
      }
      //step -> 5 : get account balance
      const accBalance = await getAccountBalance(web3, walletAddress);

      if (accBalance) {
        const balance_eth = convertFromWei(web3, accBalance, "ether");
        //step -> 6 : if account balance less than nft price than return
        if (balance_eth < voucher.amountInEther) {
          dispatch(insufficientBalanceAction());
          return;
        }
      }

      //step -> 7 : buy nft
      const resp = await buyNftMetaMask(tokenInstance, walletAddress, voucher);
      if (resp) {
        // step -> 8 : call new nft mint on success response
        dispatch(newNftMinted(walletAddress, resp));
        console.log("resp", resp);
      }
    } catch (error) {
      console.log("error*****", error);
      dispatch(buyErrorAction(error));
      dispatch(buyInProgressAction(false));
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
