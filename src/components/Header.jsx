import React from "react";
import mainLogo from "../images/main-logo.png";
import sloganForSmallWidths from "../images/small-width-slogan.png";
import sloganForBigWidths from "../images/slogan.png";
import "./header.css";
import NavigationBar from "./NavigationBar";
import vid from "../images/vid2.mp4";

export const Header = ({
  onClick,
  changeToEnglish,
  changeToGreek,
  language,
}) => {
  return (
    <div className="header__overall-div">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="header__background-video"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NavigationBar
        onClick={onClick}
        changeToEnglish={changeToEnglish}
        changeToGreek={changeToGreek}
        language={language}
      />
      <div className="header__content">
        <div className="header__logo-div">
          <div className="header__inner-logo-div">
            <img
              className="main-logo"
              src={mainLogo}
              alt="fighting performance logo"
            />
            <div className="header__under-main-logo">
              <p>Kick Boxing | Boxing | Muaythai | Fitness</p>
            </div>
          </div>
        </div>
        <img
          className="sloganForBigWidths"
          src={sloganForBigWidths}
          alt="fight-performance-slogan-big-widths"
        />
        <img
          className="sloganForSmallWidths"
          src={sloganForSmallWidths}
          alt="fight-performance-slogan-small-widths"
        />
      </div>
    </div>
  );
};
