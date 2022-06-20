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
} from "./pages";

//components
import EtheriumProvider from "./services/etherium-blockchain/EtheriumProvider";

//constants
import { routes } from "./lib/utills/constants";
import { getMintedTokens } from "./redux/actions/nfts";

//styles
// import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { buyErrorSolved } from "./redux/actions/buy-flow";

//assets

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMintedTokens());
    dispatch(buyErrorSolved());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EtheriumProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.HOME} element={<LandingPage />} />
          <Route path={routes.STORY_UPDATE} element={<StoryUpdate />} />
          <Route
            path={routes.CLAIM_ATTRIBUTE}
            element={<ClaimAttributeSet />}
          />
          <Route path={routes.STORY_RELEASE} element={<LandingPage />} />
          <Route path={routes.STORY_INTRO} element={<StoryUpdate />} />
          <Route path={routes.CLUES} element={<StoryCluesPage />} />
        </Routes>
      </BrowserRouter>
    </EtheriumProvider>
  );
};

export default App;
