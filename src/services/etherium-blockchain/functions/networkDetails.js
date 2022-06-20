const networkDetails = (web3) => {
  return new Promise((resolve, reject) => {
    web3.eth.net
      .getNetworkType()
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export default networkDetails;
