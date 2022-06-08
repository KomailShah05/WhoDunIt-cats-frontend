//libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page";
import StoryUpdate from "./pages/story-update";
import StoryCluesPage from "./pages/story-clues";

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
        <Route path={routes.STORY_RELEASE} element={<LandingPage />} />
        <Route path={routes.STORY_INTRO} element={<StoryUpdate />} />
        <Route path={routes.CLUES} element={<StoryCluesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
