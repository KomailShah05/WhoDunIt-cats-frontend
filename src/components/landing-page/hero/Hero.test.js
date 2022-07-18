// libraries
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// components
import HeroSection from ".";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import configureStore from "../../../redux/store";
import { landinPageProps } from "../../../pages/landing-page";

describe("Hero section", () => {
  test("If minted value is 5000 then show Now the hunt begins heading", () => {
    //Arrange
    render(
      <Router>
        <Provider store={configureStore().store}>
          <landinPageProps.Provider
            value={{ totalMinted: 5000, winner: false }}
          >
            <HeroSection />
          </landinPageProps.Provider>
        </Provider>
      </Router>
    );

    //   Act
    // ...nothing here for now

    //   Assert
    const headingText = screen.getByText(eng_lang.storyRelease.heading, {
      exact: true,
    });
    expect(headingText).toBeInTheDocument();
  });

  test("If minted value is less than 5000 then there should not any text Now the hunt begins heading", () => {
    //Arrange
    render(
      <Router>
        <Provider store={configureStore().store}>
          <landinPageProps.Provider
            value={{
              totalMinted: 10,
              winner: {
                success: false,
              },
            }}
          >
            <HeroSection />
          </landinPageProps.Provider>
        </Provider>
      </Router>
    );

    //   Act
    // ...nothing here for now

    //   Assert
    // find test
    const headingText = screen.queryByText(eng_lang.storyRelease.heading, {
      exact: true,
    });
    expect(headingText).toBeNull();
  });

  test("If minted value is less than 5000 begin the hunt button should redirect to story intro", () => {
    //Arrange
    render(
      <Router>
        <Provider store={configureStore().store}>
          <landinPageProps.Provider
            value={{
              totalMinted: 5000,
              winner: {
                success: false,
              },
            }}
          >
            <HeroSection />
          </landinPageProps.Provider>
        </Provider>
      </Router>
    );

    //   Act
    // ...nothing
    const link = screen.getByTestId("text-grid-item");

    //   Assert
    expect(link).toHaveAttribute("href", "/story-intro");
  });

  test("Winner is reveal then hero card should be hidden", () => {
    //Arrange
    render(
      <Router>
        <Provider store={configureStore().store}>
          <landinPageProps.Provider
            value={{
              totalMinted: 5000,
              isWinner: true,
            }}
          >
            <HeroSection />
          </landinPageProps.Provider>
        </Provider>
      </Router>
    );

    //   Act
    // ...nothing

    //   Assert
    const outputElement = screen.getByTestId("hero-card");
    expect(outputElement).toHaveClass("d-none");
  });
});
