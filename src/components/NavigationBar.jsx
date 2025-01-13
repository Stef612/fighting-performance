import React from "react";
import logo from "../images/logo.png";
import "./navigationBar.css";

const NavigationBar = ({
  onClick,
  changeToEnglish,
  changeToGreek,
  language,
}) => {
  return (
    <div className="NavigationBar__overall-div">
      <img
        src={logo}
        alt="fighting-performance-logo"
        className="circular-logo"
      />
      <ul className="montserrat-bold hide-small-width">
        <li>
          <p className="flags">
            <a className="greek-flag" onClick={changeToGreek}>
              <span className="fi fi-gr"> </span>
            </a>
            <div className="divider" />
            <a className="uk-flag" onClick={changeToEnglish}>
              <span className="fi fi-gb"></span>
            </a>
          </p>
        </li>
        <li>
          <a href="#about-section">
            <p>{language ? "The team" : "H ομαδα"}</p>
          </a>
        </li>
        <li>
          <a href="#schedule-section">
            <p>{language ? "Schedule" : "προγραμμα"}</p>
          </a>
        </li>
        <li>
          <a href="#contact-section">
            <p>{language ? "Contact" : "επικοινωνια"}</p>
          </a>
        </li>
      </ul>
      {/* Hamburger Icon */}
      <i className="fa-solid fa-bars" onClick={onClick}></i>
    </div>
  );
};

export default NavigationBar;
