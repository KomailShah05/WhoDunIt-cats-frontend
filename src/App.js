//libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page";
import StoryUpdate from "./pages/story-update";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
