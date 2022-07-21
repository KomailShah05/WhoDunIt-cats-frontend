// libraries
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import axiosMock from "axios";

// constants
import configureStore from "../../../redux/store";
import { landinPageProps } from "../../../pages/landing-page";
import { eng_lang } from "../../../lib/utills/constants";
import { API_BASE_URL } from "../../../enviroments";

// components
import MintedSection from ".";

test("Fetch Minted NFTS Amount Successfully", async () => {
  //Arrange
  render(
    <Router>
      <Provider store={configureStore().store}>
        <landinPageProps.Provider value={{ totalMinted: 5000, winner: false }}>
          <MintedSection />
        </landinPageProps.Provider>
      </Provider>
    </Router>
  );

  const mockResults = {
    success: true,
    data: {
      totalMinted: 5000,
    },
  };
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(mockResults));
  await expect(
    axiosMock.get(`${API_BASE_URL}/nfts/count-minted`)
  ).resolves.toEqual(mockResults);

  expect(axiosMock.get).toHaveBeenCalledWith(
    `${API_BASE_URL}/nfts/count-minted`
  );

  await expect(screen.queryByText(eng_lang.totalNoOfMintToken)).toBeVisible();
});

test("claim api unit test returns claimed nft amount", async () => {
  //Arrange
  render(
    <Router>
      <Provider store={configureStore().store}>
        <landinPageProps.Provider
          value={{ totalMinted: 5000, isWinner: true, totalClaimed: 5000 }}
        >
          <MintedSection />
        </landinPageProps.Provider>
      </Provider>
    </Router>
  );

  const mockResults = {
    success: true,
    data: {
      totalClaimed: 5000,
    },
  };
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(mockResults));
  await expect(
    axiosMock.get(`${API_BASE_URL}/nfts/count-claimed`)
  ).resolves.toEqual(mockResults);

  expect(axiosMock.get).toHaveBeenCalledWith(
    `${API_BASE_URL}/nfts/count-claimed`
  );

  await expect(
    screen.queryByText(eng_lang.winnerRevealLandingPage.heading)
  ).toBeVisible();
});

test("Winner API returns winner", async () => {
  //Arrange
  render(
    <Router>
      <Provider store={configureStore().store}>
        <landinPageProps.Provider
          value={{ totalMinted: 5000, isWinner: true, totalClaimed: 5000 }}
        >
          <MintedSection />
        </landinPageProps.Provider>
      </Provider>
    </Router>
  );

  const mockResults = {
    success: true,
    killerCat: {
      _id: "1",
      index: 1,
      height: "Six feet one inch",
      skin: "Hairless",
      shirts: "White Color Shirt",
      eyes: "Star Glasses",
      hats: "Engineer Hat",
      plackNumber: 40091,
      imagePath:
        "https://gateway.pinata.cloud/ipfs/QmNfHiRCBz1hnjeD1793EPFh8MpBEvod52tf65uabSGMhR/1.png",
      jsonFilePath:
        "https://gateway.pinata.cloud/ipfs/QmYgSW3nar1dLuj85f4mB4ES3UbV9dErJizv3EVpVEW5dH/1.json",
      combo: 0,
      isClaimed: false,
      isWinner: true,
      nft: "9",
      walletAddress: "0x4d1c662016b9ccab8ee0a1aa855273e0e7dbafb9",
    },
    winner: {
      user: {
        username: "Faizan_Khalid",
      },
      profile_img_url:
        "https://openseauserdata.com/files/dc87c96fa009947892ef8181dfd7e5e3.jpg",
      address: "0x4d1c662016b9ccab8ee0a1aa855273e0e7dbafb9",
      config: "",
      currencies: {},
    },
  };
  axiosMock.get.mockImplementationOnce(() => Promise.resolve(mockResults));
  await expect(
    axiosMock.get(`${API_BASE_URL}/suspected-cats/winner`)
  ).resolves.toEqual(mockResults);

  expect(axiosMock.get).toHaveBeenCalledWith(
    `${API_BASE_URL}/suspected-cats/winner`
  );

  await expect(
    screen.queryByText(eng_lang.winnerRevealLandingPage.heading)
  ).toBeVisible();
});

test("Winner Reveal is not shown if winner is not true in redux", async () => {
  //Arrange
  render(
    <Router>
      <Provider store={configureStore().store}>
        <landinPageProps.Provider
          value={{ totalMinted: 5000, isWinner: false, totalClaimed: 5000 }}
        >
          <MintedSection />
        </landinPageProps.Provider>
      </Provider>
    </Router>
  );

  await expect(
    screen.queryByText(eng_lang.winnerRevealLandingPage.heading)
  ).toBeNull();
});
