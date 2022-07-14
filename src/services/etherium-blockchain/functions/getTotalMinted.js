const getTotalMinted = (tokenInstance) => {
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await tokenInstance.methods.totalMinted();
      console.log("total minted response: ", resp);
    } catch (error) {
      reject(error);
    }
  });
};

export default getTotalMinted;
