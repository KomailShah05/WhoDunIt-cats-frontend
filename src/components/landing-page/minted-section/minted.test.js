import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
// import axios from "axios";

import configureStore from "../../../redux/store";
import { landinPageProps } from "../../../pages/landing-page";

// import { BASE_URL } from "../../../enviroments";

import MintedSection from ".";

// jest.mock("axios");

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

  //   let response = await axios.get(`${BASE_URL}nfts/count-minted`);

  //   const totalMintedNFTS = 5000;
  //   expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}nfts/count-minted`);
  //   expect(response).toEqual(totalMintedNFTS);
});
