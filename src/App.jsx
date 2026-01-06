// import "./App.css";

import LogoSection from "./components/LogoSection";
import Navbar from "./components/Navbar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCaseSection />
      <FeatureCards />
      <TechStack />
    </>
  );
}

export default App;
