import React, { useState } from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";

function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    return Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullet = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Interest", logoSrc: "interests.svg" },
  ];

  const programmingSkills = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "ReactJS", ratingPercentage: 85 },
    { skill: "NodeJS", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 55 },
  ];


  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Can Tho University"}
        subHeading={"Computer Science"}
        fromDate={"2020"}
        toDate={"2024"}
      />
      <ResumeHeading
        heading={"Chau Van Liem High School"}
        subHeading={"A Student at Chau Van Liem highschool"}
        fromDate={"2017"}
        toDate={"2020"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Looking for Internship"}
        subHeading={""}
        fromDate={"2022"}
        toDate={"Present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently looking for an opportunity for an intership.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text"></span>
        <br />
        <span className="resume-description-text"></span>
        <br />
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Play Guitar" description="" />
      <ResumeHeading heading="Listen to Music" description="" />
      <ResumeHeading heading="Coffee" description="" />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px" },
    };
    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullet.map((bullet, index) => {
      return (
        <div
          onClick={() => handleCarousel(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require("../../assets/Resume/work-history.svg").default}
            alt=""
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
    });
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
