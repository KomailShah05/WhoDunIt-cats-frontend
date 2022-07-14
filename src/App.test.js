import { render, screen } from "@testing-library/react";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";

describe("App", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={configureStore().store}>
        <App />
      </Provider>
    );
    expect(
      screen.getByText("Terms and Conditions").closest("a")
    ).toHaveAttribute("href", "/terms-and-conditions");
    expect(screen.getByText("Twitter").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
  });
});
