//libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/landing-page";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
