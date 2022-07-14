// libraries
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

// components
import Footer from ".";

describe("footer", () => {
  test(" renders successfully with FAQ Page Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText("FAQ").closest("a")).toHaveAttribute(
      "href",
      "/faqs"
    );
  });

  test(" renders successfully with Terms and Condition Page Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(
      screen.getByText("Terms and Conditions").closest("a")
    ).toHaveAttribute("href", "/terms-and-conditions");
  });

  test(" renders successfully with Twitter Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText("Twitter").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  test(" renders successfully with Discord Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText("Discord").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });

  test(" renders successfully with Instagram Link", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText("Instagram").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });
});
