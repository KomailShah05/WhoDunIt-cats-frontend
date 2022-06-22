// libraries
import React from "react";

// components
import { SmallPopupCongrats } from "../../components/commons";
import { AttributeSection } from "../../components/claim-attribute-set";

const ClaimAttributeSet = () => {
  return (
    <>
      <AttributeSection />
      <SmallPopupCongrats />
    </>
  );
};

export default ClaimAttributeSet;
