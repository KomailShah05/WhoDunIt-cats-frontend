// libraries
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

// components
import HowItWorks from ".";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import configureStore from "../../../redux/store";
import { landinPageProps } from "../../../pages/landing-page";

describe("How It Works section", () => {
  test("If the component successfully renders with heading", () => {
    //Arrange
    render(
      <Router>
        <Provider store={configureStore().store}>
          <landinPageProps.Provider
            value={{ totalMinted: 5000, winner: false }}
          >
            <HowItWorks />
          </landinPageProps.Provider>
        </Provider>
      </Router>
    );
    //   Assert
    const headingText = screen.getByText(eng_lang.howItWorks.heading, {
      exact: true,
    });
    expect(headingText).toBeInTheDocument();
  });

  test("If the component successfully renders with the underline image for heading", () => {
    //Arrange
    render(
      <Router>
        <Provider store={configureStore().store}>
          <landinPageProps.Provider
            value={{ totalMinted: 5000, winner: false }}
          >
            <HowItWorks />
          </landinPageProps.Provider>
        </Provider>
      </Router>
    );
    //   Assert
    const image = screen.getByAltText("Underline");
    expect(image).toBeInTheDocument();
  });
});
