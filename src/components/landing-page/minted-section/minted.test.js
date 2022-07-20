import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import axiosMock from "axios";

import configureStore from "../../../redux/store";
import { landinPageProps } from "../../../pages/landing-page";

import { API_BASE_URL } from "../../../enviroments";

import { getMintedTokens } from "../../../redux/actions/nfts";

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
});
