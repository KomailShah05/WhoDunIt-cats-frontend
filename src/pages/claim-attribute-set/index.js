// libraries
import React from "react";
import { useSelector } from "react-redux";

// components
import { SmallPopupCongrats } from "../../components/commons";
import { AttributeSection } from "../../components/claim-attribute-set";
import Toast from "../../lib/helper/toast";

const ClaimAttributeSet = () => {
  const {
    claimReducer: { btnLoading, displayModal },
  } = useSelector((state) => state);
  return (
    <>
      <AttributeSection btnLoading={btnLoading} />
      <SmallPopupCongrats displayModal={displayModal} />
      <Toast />
    </>
  );
};

export default ClaimAttributeSet;
