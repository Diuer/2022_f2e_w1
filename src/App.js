import { useEffect } from "react";

import "./App.scss";

import headerLogo from "./assets/logo/logo.png";

import runAnimation from "./gsap/animate";

import BannerSection from "./sections/banner";
import FaqSection from "./sections/faq";

function App() {
  useEffect(() => {
    runAnimation();

    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="App">
      <img className="header-logo" src={headerLogo} alt="header-logo" />
      <BannerSection />
      <FaqSection />
      {/* <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div> */}
    </div>
  );
}

export default App;
