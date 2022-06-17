// libraries
import { createContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Web3 from "web3";
import Web3 from "web3/dist/web3.min";
import { BigNumber } from "bignumber.js";

// components
import { notfiFail } from "../../lib/helper/toast";

// blockchain functions
import { connectToMetaMask, buyNftMetaMask } from "./functions";

// actions
import { btnLoadingAction } from "../../redux/actions/nfts";
import {
  metaMaskWalletConnected,
  walletConnectedFail,
} from "../../redux/actions/blockchain";
import { buyInProgressAction } from "../../redux/actions/buy-flow";

// constants
import blockchain_interfaces from "../../lib/utills/constants/blockchain-interfaces";

export const EtheriumContext = createContext({});

const EtheriumProvider = ({ children }) => {
  const dispatch = useDispatch();
  const {
    voucherReducer: { voucher },
  } = useSelector((state) => state);
  const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
  const tokenInstance = new web3.eth.Contract(
    blockchain_interfaces,
    "0x701D9e4ECC4Ee2f55482c0AcaBe86Fd0C807879f"
  );

  const voucherTrx = { expire_at: 23232123, minPrice: 0.18 };
  voucherTrx.minPrice = web3.utils.toWei(voucherTrx.minPrice.toString());
  web3.eth.getAccounts().then((res) => {
    // const voucherAmount = voucher.eth_amount;
    // const token_amount = web3.utils.toWei(voucherAmount.toString(), "ether");
    if (voucher.eth_amount)
      tokenInstance.methods
        .redeem(res[0], voucherTrx, voucher.signature)
        .send({
          from: res[0],
          value: voucherTrx.minPrice,
        })
        .on("receipt", (receipt) => {
          console.log("receipt", receipt);
        })
        .on("error", (error) => {
          console.log("error", error);
        });
  });

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
      dispatch(buyInProgressAction(true));
      const resp = await buyNftMetaMask();
      console.log("resp*****", resp);
      // if (resp?.length > 0) {
      //   dispatch(metaMaskWalletConnected(resp[0]));
      // }
    } catch (error) {
      console.log("error*****", error);
      dispatch(buyInProgressAction(false));
      // notfiFail(error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
