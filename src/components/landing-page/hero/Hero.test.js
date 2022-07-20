// libraries
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// components
import { HeroSection } from "..";
import { PopUp } from "../../join-the-hunt";

// constants
import { eng_lang } from "../../../lib/utills/constants";
import { landinPageProps } from "../../../pages/landing-page";
import { renderWithProviders } from "../../../lib/utills/unit-tests-jest/test-utills";

describe("Hero section", () => {
  test("If minted value is 5000 then show Now the hunt begins heading", () => {
    //Arrange
    renderWithProviders(
      <landinPageProps.Provider value={{ totalMinted: 5000, winner: false }}>
        <HeroSection />
      </landinPageProps.Provider>
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
    renderWithProviders(
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
    renderWithProviders(
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
    );

    //   Act
    // ...nothing
    const link = screen.getByTestId("text-grid-item");

    //   Assert
    expect(link).toHaveAttribute("href", "/story-intro");
  });

  test("Winner is reveal then hero card should be hidden", () => {
    //Arrange
    renderWithProviders(
      <landinPageProps.Provider
        value={{
          totalMinted: 5000,
          isWinner: true,
        }}
      >
        <HeroSection />
      </landinPageProps.Provider>
    );

    //   Act
    // ...nothing

    //   Assert
    const outputElement = screen.getByTestId("hero-card");
    expect(outputElement).toHaveClass("d-none");
  });

  test('Clicking on "Join the hunt" button connect metamask popup will be open', async () => {
    //Arrange
    renderWithProviders(
      <landinPageProps.Provider
        value={{
          totalMinted: 12,
          isWinner: false,
          showModal: "",
        }}
      >
        <HeroSection />
        <PopUp />
      </landinPageProps.Provider>
    );

    //   Act
    const button = screen.getByTestId("join-hunt");
    userEvent.click(button);

    //   Assert
    const outputElement = await screen.findByTestId(
      "metamask-modal",
      {},
      { timeout: 30000 }
    );
    expect(outputElement).toBeInTheDocument();
  }, 30000);
});
