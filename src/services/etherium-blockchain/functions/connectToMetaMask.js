import { blc_func_name } from "../../../lib/utills/constants";

const connectToMetaMask = () => {
  return new Promise((resolve, reject) => {
    // Asking if metamask is already nt or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: blc_func_name.ETH_REQUEST_ACCOUNTS })
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
