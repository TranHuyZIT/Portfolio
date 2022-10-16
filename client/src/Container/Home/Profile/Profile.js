import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/tony.huy.9083">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/tgiahui/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCNiZqjuAdvTdDTkvg1lQgnA">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Tran Gia Huy</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front-End Dev",
                    1000,
                    "Computer Science",
                    1000,
                    "Tran Gia Huy",
                    1000,
                  ]}
                ></Typical>
              </h1>
              <span className="profile-role-tagline">
                Web Development With ReactJS, NodeJS, Python.
              </span>
            </span>
          </div>
          <div className="profile-options">
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
  );
}
export default Profile;
