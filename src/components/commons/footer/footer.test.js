// libraries
import { render } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

// components
import Footer from ".";

test("footer renders with no props", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
});
