const signTransaction = (web3, dataToSign) => {
  return new Promise((resolve, reject) => {
    try {
      web3.eth.personal
        .sign(dataToSign, window?.ethereum?.selectedAddress)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

export default signTransaction;
