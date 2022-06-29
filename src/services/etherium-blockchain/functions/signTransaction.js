const signTransaction = (web3, dataToSign, walletAddress) => {
  return new Promise((resolve, reject) => {
    try {
      web3.eth.personal
        .sign(dataToSign, walletAddress)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

export default signTransaction;
