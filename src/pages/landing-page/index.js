//libraries
import React, { createContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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

// actions-redux
import { getWinner } from "../../redux/actions/winner-reveal";

//constants

//styles

//assets

export const landinPageProps = createContext();

const LandingPage = () => {
  const dispatch = useDispatch();
  const {
    nftsReducer: { totalMinted, btnLoading, showModal },
    voucherReducer: { voucherLoading, voucher },
    metaMaskWalletReducer: { walletConnected, walletAddress },
    buyReducer: { buyInProgress, buyError, congrats, tokenId },
    winnerReducer: { success },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getWinner());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          success,
        }}
      >
        <HeroSection />
        <MintedSection />
        <HowItWorks />
        <WhoDidIt />
        <PopUp />
        <SmallPopup />
        <Toast />
        <ScrollingModal />
      </landinPageProps.Provider>
    </>
  );
};

export default LandingPage;
