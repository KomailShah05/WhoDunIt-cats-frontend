//libraries
import React from "react";

//pages

//components
import { Header, PopUp, Footer } from "../../components/commons";
import {
  HeroSection,
  MintedSection,
  WhoDidIt,
  HowItWorks,
} from "../../components/landing-page";

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
      <Footer />
    </>
  );
};

export default LandingPage;
