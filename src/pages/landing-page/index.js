//libraries
import React from "react";
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

const LandingPage = () => {
  const { totalMinted, btnLoading } = useSelector((state) => state.nftsReducer);
  const { walletConnected, walletAddress } = useSelector(
    (state) => state.metaMaskWalletReducer
  );

  return (
    <>
      <Header />
      <HeroSection />
      <MintedSection totalMinted={totalMinted} />
      <HowItWorks />
      <WhoDidIt />
      <PopUp
        totalMinted={totalMinted}
        walletConnected={walletConnected}
        btnLoading={btnLoading}
        walletAddress={walletAddress}
      />
      <SmallPopup />
      <Footer />
      <Toast />
    </>
  );
};

export default LandingPage;
