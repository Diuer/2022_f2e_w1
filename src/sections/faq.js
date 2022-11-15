import "./faq.scss";

import bgTalkingLeft from "../assets/bg/bg_talking_l.png";
import bgTalkingCenter from "../assets/bg/bg_talking_c.png";
import bgTalkingRight from "../assets/bg/bg_talking_r.png";

import question1 from "../assets/main/question_1.png";
import question2 from "../assets/main/question_2.png";
import question3 from "../assets/main/question_3.png";

const faqSection = () => {
  return (
    <div className="faq-section">
      <div className="faq-background"></div>
      <div className="bg-talking-container">
        <img
          className="bg-talking bg-talking-l"
          src={bgTalkingLeft}
          alt="bg-talking-l"
        />
        <img
          className="bg-talking bg-talking-c"
          src={bgTalkingCenter}
          alt="bg-talking-c"
        />
        <img
          className="bg-talking bg-talking-r"
          src={bgTalkingRight}
          alt="bg-talking-r"
        />
        <h1 className="section-title">你是否也有以下困擾？</h1>
      </div>
      <div className="confuse-container">
        <div className="confuse-item">
          <h2 className="confuse-item-title">羨慕別人的酷酷網頁動畫？</h2>
          <img
            className="confuse-item-img"
            src={question1}
            alt="confuse-item-img"
          />
        </div>
        <div className="confuse-item">
          <h2 className="confuse-item-title">滿足不了同事的許願？</h2>
          <img
            className="confuse-item-img"
            src={question2}
            alt="confuse-item-img"
          />
        </div>
        <div className="confuse-item">
          <h2 className="confuse-item-title">動畫技能樹太雜無從下手？</h2>
          <img
            className="confuse-item-img"
            src={question3}
            alt="confuse-item-img"
          />
        </div>
      </div>
    </div>
  );
};

export default faqSection;
