import { createContext, useCallback, useEffect, useState } from "react";

export const EtheriumContext = createContext({});

const EtheriumProvider = ({ children }) => {
  const [walletConnected, setwalletConnected] = useState(false);
  const [walletAddress, setwalletAddress] = useState(null);

  const connectToMetaMask = useCallback(() => {
    // Asking if metamask is already nt or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum.request({ method: "eth_requestAccounts" }).then((res) => {
        if (res?.length > 0) {
          setwalletAddress(res[0]);
          setwalletConnected(true);
        }
      });
    } else {
      alert("install metamask extension!!");
      setwalletAddress(null);
      setwalletConnected(false);
    }
  }, []);

  return (
    <EtheriumContext.Provider
      value={{
        connectToMetaMask,
        walletConnected,
        walletAddress,
      }}
    >
      {children}
    </EtheriumContext.Provider>
  );
};

export default EtheriumProvider;
