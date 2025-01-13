import React from "react";
import "./loading.css";
import mainLogo from "../images/main-logo.png";
import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="Loading__overall-div">
      <img
        class="loading-logo"
        src={mainLogo}
        alt="fighting performance logo"
      />
      <ReactLoading type={"spinningBubbles"} color="#fff" />
    </div>
  );
}
