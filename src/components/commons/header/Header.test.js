import { render, screen } from "@testing-library/react";
import Header from ".";
import { render as rtlRender } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("With React Testing Library", () => {
  const initialState = { totalMinted: 0 };
  const mockStore = configureStore();
  let store;

  it('Shows "Hello world!"', () => {
    store = mockStore(initialState);
    rtlRender(
      <Provider store={store}>
        <Header />
      </Provider>,
      { preloadedState: { nftsReducer: { totalMinted: 0 } } }
    );
    const text = screen.getByText(/whodunitcats/i);
    // assertion
    expect(text.toBeInTheDocument());

    // expect(getByText("H!")).not.toBeNull();
  });
});
