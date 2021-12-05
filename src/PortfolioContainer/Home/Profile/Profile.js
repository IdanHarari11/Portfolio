import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/idan.harari.1" target="_blank">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/_idanharari/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="mailto:idanharari112@gmail.com" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://github.com/IdanHarari11" target="_blank">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Idan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Harari Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "MERN & MEAN Stack Dev 📱",
                    1000,
                    "Cross Platform Dev",
                    1000,
                    "Angular Developer",
                    1000,
                    "React Developer 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="IdanHarari.pdf" download="IdanHarari.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
