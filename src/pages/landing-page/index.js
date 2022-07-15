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
import { getWinnerAction } from "../../redux/actions/winner-reveal";
import { eng_lang } from "../../lib/utills/constants";

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
    winnerReducer: { isWinner, winnerData },
  } = useSelector((state) => state);

  useEffect(() => {
    if (totalMinted >= eng_lang.totalNoOfMintToken) {
      dispatch(getWinnerAction());
    }
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
          isWinner,
          winnerData,
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
