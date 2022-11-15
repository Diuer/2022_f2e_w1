import gsap from "gsap";

const getBannerSection = () => {
  const bannerSection = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-background", // 決定scrolltrigger要以哪一個元素作為觸發基準點
      markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
      start: "25% top", // 決定動畫開始點的位置
      pin: true,
      scrub: true, // 物件動畫根據卷軸捲動程度跑
      duration: 0.5,
    },
  });

  bannerSection
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
    )
    .to(".traffic-light-container", {
      opacity: 0,
      delay: 5,
    })
    .to(".start-bg", {
      opacity: 0,
    })
    .to(
      ".bg-decorate",
      {
        display: "none",
      },
      "<"
    )
    // .to(".character-1", {
    //   transform: "scale(0.5) translateY(40%)",
    //   duration: 10,
    // })
    // .to(
    //   ".character-2",
    //   {
    //     transform: "scale(0.5) translateY(40%)",
    //     duration: 10,
    //   },
    //   "<"
    // )
    // .to(
    //   ".character-3",
    //   {
    //     transform: "scale(0.5) translateY(40%)",
    //     duration: 10,
    //   },
    //   "<"
    // )
    .to(
      ".bg-decorate-09",
      {
        opacity: 1,
      },
      "<"
    )
    .to(".bg-decorate-09-l", {
      left: "25%",
      transform: "matrix(-1, 0, 0, 1, 0, 0) scale(0.7) translateY(35px)",
    })
    .to(
      ".bg-decorate-09-r",
      {
        right: "25%",
        transform: "scale(0.7) translateY(35px)",
      },
      "<"
    )
    .to(
      ".character-conatiner",
      {
        transform: "scale(0.7) translateY(calc(40% * 0.7))",
      },
      "<"
    )
    .to(
      ".road-bg",
      {
        transform: "scale(0.7) translateY(calc(40% * 0.7))",
      },
      "<"
    )
    .to(".header-logo", {
      opacity: 1,
    });
  // scale(0.5) translateY(40%)
  return bannerSection;
};

export default getBannerSection;
