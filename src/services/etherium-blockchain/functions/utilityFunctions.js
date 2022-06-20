const convertToWei = (web3, value) => {
  return web3.utils.toWei(value.toString());
};

const convertFromWei = (web3, value, to) => {
  return web3.utils.fromWei(value, to);
};

const getAccountAddress = (web3) => {
  return new Promise((resolve, reject) => {
    web3.eth
      .getAccounts()
      .then(async (res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getAccountBalance = (web3, walletAddress) => {
  return new Promise((resolve, reject) => {
    web3.eth
      .getBalance(walletAddress)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { convertToWei, getAccountAddress, getAccountBalance, convertFromWei };
