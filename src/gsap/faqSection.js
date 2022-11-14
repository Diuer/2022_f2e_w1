import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const getFaqSection = () => {
  const faqSection = gsap.timeline({
    scrollTrigger: {
      trigger: ".bg-decorate-001", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "top 35%", // 決定動畫開始點的位置
      end: "top 1%", // 決定動畫結束點的位置
      scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
      // pin: true, //重要！ pin需設為true
    },
  });

  faqSection
    .to(".traffic-text", {
      text: "",
      position: "absolute",
    })
    .to(".yellow-light", { opacity: 0 }, "<")
    .to(".green-light", { opacity: 0 }, "<")
    .to(".bg-decorate-001", {
      left: "20%",
      opacity: 1,
      position: "absolute",
      duration: 5,
    })
    .to(
      ".bg-decorate-005",
      {
        right: "20%",
        opacity: 1,
        position: "absolute",
        duration: 5,
      },
      "<"
    )
    .to(".red-light", { opacity: 0 })
    .to(".yellow-light", { opacity: 1, duration: 10 }, "<")
    .to(".yellow-light", { opacity: 0 })
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
    .to(".green-light", { opacity: 1, duration: 10 }, "<")
    .to(
      ".traffic-text",
      {
        text: "GO!",
        position: "absolute",
      },
      "<"
    );
  return faqSection;
};

export default getFaqSection;
