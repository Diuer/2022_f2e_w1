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
    );
  return bannerSection;
};

export default getBannerSection;
