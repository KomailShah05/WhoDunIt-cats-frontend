import React from "react";

const ErrorBody = ({ buyError }) => {
  return (
    <>
      <h2 className="text-white text-center">{buyError?.errorType || "---"}</h2>
      <div className="sm-modal__congrats-body-margin">
        <p>{buyError?.errorMsg}</p>
      </div>
    </>
  );
};

export default ErrorBody;
