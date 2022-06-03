//libraries
import React from "react";

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
  return (
    <>
      <Header />
      <HeroSection />
      <MintedSection />
      <HowItWorks />
      <WhoDidIt />
      <PopUp />
      <SmallPopup />
      <Footer />
    </>
  );
};

export default LandingPage;
