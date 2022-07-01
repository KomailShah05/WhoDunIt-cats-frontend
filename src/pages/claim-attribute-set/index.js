// libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";

// components
import { SmallPopupCongrats } from "../../components/commons";
import { AttributeSection } from "../../components/claim-attribute-set";
import Toast from "../../lib/helper/toast";

const ClaimAttributeSet = () => {
  const {
    claimReducer: { btnLoading, displayModal, errMsg, nftIndex },
  } = useSelector((state) => state);
  const [callApi, setCallApi] = useState(false);

  return (
    <>
      <AttributeSection btnLoading={btnLoading} callApi={callApi} />
      <SmallPopupCongrats
        displayModal={displayModal}
        errMsg={errMsg}
        nftIndex={nftIndex}
        setCallApi={setCallApi}
        callApi={callApi}
      />
      <Toast />
    </>
  );
};

export default ClaimAttributeSet;
