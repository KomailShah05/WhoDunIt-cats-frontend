import { render } from "@testing-library/react";

import { unmountComponentAtNode } from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";
import Footer from ".";

let container = null;

test("footer renders with no props", () => {
  render(
    <Router>
      <Footer />
    </Router>
  );
});
