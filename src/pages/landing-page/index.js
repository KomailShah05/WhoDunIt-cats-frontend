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
  const {
    nftsReducer: { totalMinted, btnLoading, showModal },
    voucherReducer: { voucherLoading, voucher },
    metaMaskWalletReducer: { walletConnected, walletAddress },
    buyReducer: { buyInProgress, buyError, congrats, tokenId },
  } = useSelector((state) => state);

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
        voucherLoading={voucherLoading}
        voucher={voucher}
        showModal={showModal}
      />
      <SmallPopup
        voucher={voucher}
        walletAddress={walletAddress}
        buyInProgress={buyInProgress}
        buyError={buyError}
        congrats={congrats}
        showModal={showModal}
        tokenId={tokenId}
      />
      <Footer />
      <Toast />
    </>
  );
};

export default LandingPage;
