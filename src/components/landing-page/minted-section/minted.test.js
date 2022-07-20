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
