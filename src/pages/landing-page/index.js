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

//constants

//styles

//assets

const LandingPage = () => {
  const { totalMinted } = useSelector((state) => state.nftsReducer);

  return (
    <>
      <Header />
      <HeroSection />
      <MintedSection totalMinted={totalMinted} />
      <HowItWorks />
      <WhoDidIt />
      <PopUp totalMinted={totalMinted} />
      <SmallPopup />
      <Footer />
    </>
  );
};

export default LandingPage;
