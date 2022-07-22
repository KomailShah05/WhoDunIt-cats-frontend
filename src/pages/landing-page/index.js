//libraries
import React, { createContext } from "react";
import { useSelector } from "react-redux";

//pages

//components
import { SmallPopup } from "../../components/commons";
import {
  HeroSection,
  MintedSection,
  WhoDidIt,
  HowItWorks,
} from "../../components/landing-page";
import { PopUp, ScrollingModal } from "../../components/join-the-hunt";
import Toast from "../../lib/helper/toast";

//constants
// import { eng_lang } from "../../lib/utills/constants";

//styles

//assets

export const landinPageProps = createContext();

const LandingPage = () => {
  const {
    nftsReducer: { totalMinted, btnLoading, showModal },
    voucherReducer: { voucherLoading, voucher },
    metaMaskWalletReducer: { walletConnected, walletAddress },
    buyReducer: { buyInProgress, buyError, congrats, tokenId },
    winnerReducer: { isWinner, winnerData },
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
          isWinner,
          winnerData,
        }}
      >
        <HeroSection />
        <MintedSection />
        <HowItWorks />
        <WhoDidIt />
        {showModal && <PopUp />}
        <SmallPopup />
        <Toast />
        <ScrollingModal />
      </landinPageProps.Provider>
    </>
  );
};

export default LandingPage;
