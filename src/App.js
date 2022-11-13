import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import "./App.scss";

import bgDecorate01 from "./assets/bg/bg_decorate_01.png";
import bgDecorate05 from "./assets/bg/bg_decorate_05.png";

import startBg from "./assets/main/start.png";
import roadBg from "./assets/main/road.png";
import logo from "./assets/logo/logo_text.png";

import trafficLight from "./assets/main/ready_frame.png";
import greenLight from "./assets/main/ready_1.png";
import yellowLight from "./assets/main/ready_2.png";
import redLight from "./assets/main/ready_3.png";

import character1 from "./assets/character/character_f2e.gif";
import character2 from "./assets/character/character_ui.gif";
import character3 from "./assets/character/character_team.gif";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".bg-decorate-001", // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: "top 35%", // 決定動畫開始點的位置
        end: "top 1%", // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
        // pin: true, //重要！ pin需設為true
      },
    });

    tl.to(".traffic-text", {
      text: "",
      position: "absolute",
    })
      .to(".yellow-light", { opacity: 0 }, "<")
      .to(".green-light", { opacity: 0 }, "<")
      .to(".bg-decorate-001", {
        left: "20%",
        opacity: 1,
        position: "absolute",
      })
      .to(
        ".bg-decorate-005",
        {
          right: "20%",
          opacity: 1,
          position: "absolute",
        },
        "<"
      )
      .to(".red-light", { opacity: 0 })
      .to(".yellow-light", { opacity: 1 }, "<")
      .to(".bg-decorate-001", {
        opacity: 0,
        position: "absolute",
      })
      .to(
        ".bg-decorate-005",
        {
          opacity: 0,
          position: "absolute",
        },
        "<"
      )
      .to(".yellow-light", { opacity: 0 })
      .to(".green-light", { opacity: 1 }, "<")
      .to(
        ".traffic-text",
        {
          text: "GO!",
          position: "absolute",
        },
        "<"
      );
  }, []);

  return (
    <div className="App">
      <div className="section section-1">
        <div className="bg-decorate-container">
          <img
            className="bg-decorate bg-decorate-001"
            src={bgDecorate01}
            alt="bg-decorate-01"
          />
          <img
            className="bg-decorate bg-decorate-005"
            src={bgDecorate05}
            alt="bg-decorate-05"
          />
        </div>
        <div className="traffic-light-container">
          <span className="traffic-text">Ready?</span>
          <img className="green-light" src={greenLight} alt="green-light" />
          <img className="yellow-light" src={yellowLight} alt="yellow-light" />
          <img className="red-light" src={redLight} alt="red-light" />
          <img
            className="traffic-light"
            src={trafficLight}
            alt="traffic-light"
          />
        </div>
        <img className="start-bg" src={startBg} alt="start-bg" />
        <img className="road-bg" src={roadBg} alt="road-bg" />
        <img className="logo" src={logo} alt="logo-text" />
        <h1 className="sub-title">互動式網頁設計</h1>
        <div className="character-conatiner">
          <img className="character-1" src={character1} alt="character-1" />
          <img className="character-2" src={character2} alt="character-2" />
          <img className="character-3" src={character3} alt="character-3" />
        </div>
      </div>
    </div>
  );
}

export default App;
