//libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages

import { LandingPage, StoryUpdate, ClaimAttributeSet } from "./pages";

//components

//constants
import { routes } from "./lib/utills/constants";

//styles
import "./sass/main.scss";

//assets

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<LandingPage />} />
        <Route path={routes.STORY_UPDATE} element={<StoryUpdate />} />
        <Route path={routes.CLAIM_ATTRIBUTE} element={<ClaimAttributeSet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
