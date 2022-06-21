//libraries
import React, { createContext } from "react";
import { useSelector } from "react-redux";

//pages

//components
import { Header, Footer, SmallPopup } from "../../components/commons";
import {
  HeroSection,
  MintedSection,
  WhoDidIt,
  HowItWorks,
} from "../../components/landing-page";
import { PopUp } from "../../components/join-the-hunt";
import Toast from "../../lib/helper/toast";

//constants

//styles

//assets

export const landinPageProps = createContext();

const LandingPage = () => {
  const {
    nftsReducer: { totalMinted, btnLoading, showModal },
    voucherReducer: { voucherLoading, voucher },
    metaMaskWalletReducer: { walletConnected, walletAddress },
    buyReducer: { buyInProgress, buyError, congrats, tokenId },
  } = useSelector((state) => state);

  return (
    <>
      <landinPageProps.Provider
        value={{
          totalMinted,
          walletConnected,
          btnLoading,
          walletAddress,
          voucherLoading,
          voucher,
          buyInProgress,
          buyError,
          congrats,
          showModal,
          tokenId,
        }}
      >
        <Header />
        <HeroSection />
        <MintedSection />
        <HowItWorks />
        <WhoDidIt />
        <PopUp />
        <SmallPopup />
        <Footer />
        <Toast />
      </landinPageProps.Provider>
    </>
  );
};

export default LandingPage;
