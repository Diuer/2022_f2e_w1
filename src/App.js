import { useEffect } from "react";

import "./App.scss";

import runAnimation from "./gsap/animate";

import BannerSection from "./sections/banner";

function App() {
  useEffect(() => {
    runAnimation();

    if (window.scrollY > 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="App">
      <BannerSection />
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
