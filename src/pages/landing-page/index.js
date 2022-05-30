//libraries
import React from "react";

//pages

//components
import { Header } from "../../components/commons";
import { HeroSection } from "../../components/landing-page";
import MintedSection from "../../components/landing-page/minted-section";
import WhoDidIt from "../../components/landing-page/who-did-it";

//constants

//styles

//assets

const LandingPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <MintedSection />
      <WhoDidIt />
    </>
  );
};

export default LandingPage;
