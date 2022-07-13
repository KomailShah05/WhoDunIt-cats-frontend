// libraries
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

// components
import Footer from ".";

describe("footer", () => {
  test(" renders successfully", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
  });
});
