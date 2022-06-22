//libraries
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

//pages
import {
  LandingPage,
  StoryUpdate,
  ClaimAttributeSet,
  StoryCluesPage,
  Error,
} from "./pages";

//components
import EtheriumProvider from "./services/etherium-blockchain/EtheriumProvider";
import { withHeaderAndFooter } from "./withHeaderAndFooter";

//constants
import { routes } from "./lib/utills/constants";
import {
  getMintedTokens,
  showModalAction,
  btnLoadingAction,
} from "./redux/actions/nfts";

//styles
// import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { buyErrorSolved, resetTokenAndMint } from "./redux/actions/buy-flow";

//assets

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMintedTokens());
    dispatch(buyErrorSolved());
    dispatch(showModalAction(""));
    dispatch(resetTokenAndMint());
    dispatch(btnLoadingAction(false));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EtheriumProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.HOME}
            element={withHeaderAndFooter(<LandingPage />)}
          />
          <Route
            path={routes.STORY_INTRO}
            element={withHeaderAndFooter(<StoryUpdate />)}
          />
          <Route
            path={routes.CLUES}
            element={withHeaderAndFooter(<StoryCluesPage />)}
          />
          <Route
            path={routes.CLAIM_ATTRIBUTE}
            element={withHeaderAndFooter(<ClaimAttributeSet />)}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </EtheriumProvider>
  );
};

export default App;
