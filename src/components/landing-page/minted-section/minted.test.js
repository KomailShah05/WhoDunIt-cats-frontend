import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import axiosMock from "axios";

import configureStore from "../../../redux/store";
import { landinPageProps } from "../../../pages/landing-page";

import { API_BASE_URL } from "../../../enviroments";

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

  let response = await axiosMock.get(`${API_BASE_URL}/nfts/count-minted`);
  await axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));
  expect(axiosMock.get).toHaveBeenCalledWith(
    `${API_BASE_URL}/nfts/count-minted`
  );
  expect(response.data.totalMinted).toEqual(totalMinted);
});
