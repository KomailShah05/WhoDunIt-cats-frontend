// libraries
import { createContext, useCallback, useEffect, useState } from "react";
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
  signTransaction,
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
import {
  suspectBtnLoading,
  claimNftAction,
} from "../../redux/actions/claim-attributes";

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
  const [account, setaccount] = useState(
    window?.ethereum?.selectedAddress || null
  );

  const {
    voucherReducer: { voucher },
    metaMaskWalletReducer: { walletAddress },
  } = useSelector((state) => state);
  const web3 = new Web3(Web3.givenProvider || WEB3_PROVIDER_URL);

  // detect account change event on metamask
  window?.ethereum?.on("accountsChanged", function (accounts) {
    setaccount(accounts[0]);
  });

  // initiate our web 3 with wallet address
  const tokenInstance = new web3.eth.Contract(
    BLOCKCHAIN_INTERFACES,
    CONTRACT_ADDRESS
  );

  useEffect(() => {
    checkUserLogin(window?.ethereum?.selectedAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window?.ethereum]);

  useEffect(() => {
    checkUserLogin(account);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  const checkUserLogin = async (account) => {
    if (account) {
      dispatch(metaMaskWalletConnected(account));
      return true;
    } else {
      dispatch(walletConnectedFail());
      storage.removeItem("persist:root");
      return false;
    }
  };

  // connect with metamask wallet
  const walletConnection = useCallback(async () => {
    try {
      dispatch(btnLoadingAction(true));
      const resp = await connectToMetaMask();
      if (resp?.length > 0) {
        dispatch(metaMaskWalletConnected(resp[0]));
      } else {
        dispatch(btnLoadingAction(false));
        dispatch(walletConnectedFail());
      }
    } catch (error) {
      dispatch(btnLoadingAction(false));
      dispatch(walletConnectedFail());
      notfiFail(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // user login and network details
  const userDetails = useCallback(async () => {
    let isUserLogin = false,
      networkName = null,
      accBalance = null;
    try {
      // step -> 0 : check etherum login id
      if (window?.ethereum?.selectedAddress === null) {
        notfiFail(eng_lang.user_not_login);

        return {
          isUserLogin,
          networkName,
          accBalance,
        };
      }

      // step -> 1 : check user is logged in with wallet
      isUserLogin = await checkUserLogin(window?.ethereum?.selectedAddress);

      // step -> 2 : user not login then show toast msg
      if (!isUserLogin) {
        notfiFail(eng_lang.user_not_login);
      }

      // step -> 3:  get network name
      networkName = await networkDetails(web3);

      // step -> 4 :  check if blockchain name is renkeby
      if (networkName !== WALLET_NAME) {
        notfiFail(eng_lang.contract_type_msg);
      }

      //step -> 5 : get account balance
      accBalance = await getAccountBalance(
        web3,
        window?.ethereum?.selectedAddress
      );
    } catch (error) {
      console.log("userDetails error:", error);
    }

    return {
      isUserLogin,
      networkName,
      accBalance,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  const buyNft = useCallback(async () => {
    try {
      // step -> 1 : diable buy button
      dispatch(buyInProgressAction(true));

      // step -> 2 : check user is logged in and network name
      const { isUserLogin, networkName, accBalance } = await userDetails();

      // step -> 3 :  if network name is not rinkeyby or user not connected to metamask then return
      if (networkName !== WALLET_NAME || !isUserLogin) {
        dispatch(buyInProgressAction(false));
        return;
      }

      if (accBalance) {
        const balance_eth = convertFromWei(web3, accBalance, "ether");
        //step -> 4 : if account balance less than nft price than return
        if (balance_eth < voucher.amountInEther) {
          dispatch(
            insufficientBalanceAction(balance_eth, voucher.amountInEther)
          );
          return;
        }
      }

      //step -> 5 : buy nft
      const resp = await buyNftMetaMask(tokenInstance, walletAddress, voucher);
      if (resp) {
        // step -> 6 : call new nft mint on success response
        dispatch(newNftMinted(resp));
      }
    } catch (error) {
      console.log("error", error);
      dispatch(buyErrorAction(error));
      dispatch(buyInProgressAction(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  const personalSign = async (claimNft) => {
    try {
      // step -> 1 : diable buy button
      dispatch(suspectBtnLoading(true));

      // step -> 2 : Check User Details
      const { isUserLogin, networkName } = await userDetails();
      let loginResponse;
      if (!isUserLogin) {
        loginResponse = await walletConnection();
      }
      if (!isUserLogin && loginResponse) {
        const { networkName } = await userDetails();
        // step -> 3 :  if network name is not rinkeyby or user not connected to metamask then return
        if (networkName !== WALLET_NAME) {
          dispatch(suspectBtnLoading(false));
          return;
        }
      }

      // step -> 3 :  if network name is not rinkeyby or user not connected to metamask then return
      if (isUserLogin && networkName !== WALLET_NAME) {
        dispatch(suspectBtnLoading(false));
        return;
      }

      const dataToSign = JSON.stringify({
        nonce: Math.random(),
        owner: walletAddress || window?.ethereum?.selectedAddress,
        claim_attributes: claimNft?.index,
      });

      const signature = await signTransaction(web3, dataToSign);

      if (signature) {
        dispatch(
          claimNftAction(
            window?.ethereum?.selectedAddress,
            signature,
            claimNft,
            dataToSign
          )
        );
      }
    } catch (error) {
      console.log("personalSign error", error);
      notfiFail(error?.message);
      dispatch(suspectBtnLoading(false));
    }
  };

  return (
    <EtheriumContext.Provider
      value={{
        walletConnection,
        buyNft,
        personalSign,
      }}
    >
      {children}
    </EtheriumContext.Provider>
  );
};

export default EtheriumProvider;
