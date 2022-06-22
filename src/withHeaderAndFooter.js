import { Header, Footer } from "./components/commons";

export const withHeaderAndFooter = (component) => (
  <>
    <Header />
    {component}
    <Footer />
  </>
);
