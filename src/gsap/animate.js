import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import getBannerSection from "./bannerSection";
// import getFaqSection from "./faqSection";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const runAnimation = () => {
  getBannerSection();
  // getFaqSection();
};
export default runAnimation;
