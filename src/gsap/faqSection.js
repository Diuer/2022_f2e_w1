import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const getFaqSection = () => {
  const faqSection = gsap.timeline({
    scrollTrigger: {
      trigger: ".faq-background", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "25% top", // 決定動畫開始點的位置
      pin: true,
      scrub: true, // 物件動畫根據卷軸捲動程度跑
      duration: 0.5,
    },
  });

  return faqSection;
};

export default getFaqSection;
