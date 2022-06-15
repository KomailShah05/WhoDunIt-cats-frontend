// libraries
import { createContext, useCallback } from "react";
import { useDispatch } from "react-redux";

// constants
import { connectToMetaMask } from "./functions";
import {
  metaMaskWalletConnected,
  walletConnectedFail,
} from "../../redux/actions/blockchain";
import { btnLoadingAction } from "../../redux/actions/nfts";

export const EtheriumContext = createContext({});

const EtheriumProvider = ({ children }) => {
  const dispatch = useDispatch();

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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EtheriumContext.Provider
      value={{
        walletConnection,
      }}
    >
      {children}
    </EtheriumContext.Provider>
  );
};

export default EtheriumProvider;
