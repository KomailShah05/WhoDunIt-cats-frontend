import { blc_func_name } from "../../../lib/utills/constants";

const buyNftMetaMask = (buyParameters) => {
  return new Promise((resolve, reject) => {
    // Asking if metamask is already nt or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: blc_func_name.REDEEM, params: [buyParameters] })
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

export default buyNftMetaMask;
