const buyNftMetaMask = (tokenInstance, walletAddress, voucherTrx) => {
  return new Promise((resolve, reject) => {
    try {
      tokenInstance.methods
        .redeem(walletAddress, voucherTrx.voucher, voucherTrx.signature)
        .send({
          from: walletAddress,
          value: voucherTrx.voucher.minPrice.hex,
        })
        .on("receipt", (receipt) => {
          console.log("receipt", receipt);
          resolve(receipt);
        })
        .on("error", (error) => {
          reject(error);
          console.log("error", error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export default buyNftMetaMask;
