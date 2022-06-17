// libraries
import React from "react";

// components
import { Header, Footer, SmallPopupCongrats } from "../../components/commons";
import { AttributeSection } from "../../components/claim-attribute-set";

const ClaimAttributeSet = () => {
  return (
    <>
      <Header />
      <AttributeSection />
      <SmallPopupCongrats />
      <Footer />
    </>
  );
};

export default ClaimAttributeSet;
