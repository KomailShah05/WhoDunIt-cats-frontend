//libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import {
  LandingPage,
  StoryUpdate,
  ClaimAttributeSet,
  StoryCluesPage,
} from "./pages";

//components

//constants
import { routes } from "./lib/utills/constants";

//styles
// import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

//assets

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<LandingPage />} />
        <Route path={routes.STORY_UPDATE} element={<StoryUpdate />} />
        <Route path={routes.CLAIM_ATTRIBUTE} element={<ClaimAttributeSet />} />
        <Route path={routes.STORY_RELEASE} element={<LandingPage />} />
        <Route path={routes.STORY_INTRO} element={<StoryUpdate />} />
        <Route path={routes.CLUES} element={<StoryCluesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
