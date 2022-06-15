const connectToMetaMask = () => {
  return new Promise((resolve, reject) => {
    // Asking if metamask is already nt or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } else {
      alert("install metamask extension!!");
      reject("install metamask extension!!");
    }
  });
};

export default connectToMetaMask;
