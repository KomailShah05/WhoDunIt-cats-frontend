import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";

// components
import { setupStore } from "./store-utills";

export function renderWithProviders(
  ui,
  {
    // Automatically create a store instance if no store was passed in
    store = setupStore(),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Router>
        <Provider store={store}>{children}</Provider>
      </Router>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return {
    setupStore,
    ...render(ui, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
}
