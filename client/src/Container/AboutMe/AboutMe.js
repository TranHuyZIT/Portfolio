import React, { useEffect } from "react";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./AboutMe.css";
function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    return Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANT = {
    description:
      "I'm a web developer currently studying Computer Science at Can Tho University. Technologies that i'm familiar with are ReactJS, NodeJS, Python, MySQL and MongoDB. I consider myself a sociable and enthusiastic person, but when it comes to work, I’m quite a persistent and responsible worker. A great passion of mine is programming as well as building application and I feel very grateful to be able to study and do what I love every day. Right now, i'm looking forward to having an internship for web development position.",
    highlights: {
      bullets: [
        "Web Development",
        "Interactive Front End with ReactJS",
        "Backend Development with NodeJS, Django",
        "React and React Native",
        "Building REST API",
        "Managing database: MySQL, MongoDB",
      ],
      heading: "Here are a few highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANT.highlights.bullets.map((value, index) => (
      <div className="highlight" key={index}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container fade-in" id={props.id}>
      <div className="about-me-parent">
        <ScreenHeading title="About Me" subheading="Why Choose Me?" />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANT.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANT.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => {
                  ScrollService.scrollHandler.scrollToHireMe();
                }}
              >
                Hire Me
              </button>
              <a href="ehizcv.pdf" download="ehizcv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
