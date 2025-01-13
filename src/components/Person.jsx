import React, { useState, useEffect, useRef } from "react";
import "./person.css";

export default function Person({
  image,
  video,
  name,
  insta,
  role,
  bio,
  styleNumber,
}) {
  const [showVideo, setShowVideo] = useState(false); // To switch between image and video
  const [isVisible, setIsVisible] = useState(false); // To detect if the section is in view
  const sectionRef = useRef(null); // Ref to track the section

  // Intersection Observer to track if the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting); // Set visibility
      },
      { threshold: 0.75 } // Trigger when 75% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Cleanup observer
      }
    };
  }, []);

  // Timer to switch from image to video when the section is visible and video is provided
  useEffect(() => {
    let timer;
    if (isVisible && video) {
      timer = setTimeout(() => {
        setShowVideo(true); // Show the video after 3 seconds
      }, 3000);
    } else {
      setShowVideo(false); // Reset the video when the section is not visible or no video is provided
    }

    return () => clearTimeout(timer); // Clear the timer if the component unmounts or visibility changes
  }, [isVisible, video]);

  return (
    <div className={`person__overall-div-${styleNumber}`} ref={sectionRef}>
      {/* Conditionally render the background (image or video) */}
      {!showVideo || !video ? (
        <div
          className={"background-container"}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top",
          }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          className={"background-container"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            objectPosition: "top",
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div
        className={"individuals-info"}
        style={{
          backgroundColor: showVideo ? "rgba(0, 0, 0, 0.3)" : "initial",
        }}
      >
        <div className={"gradient-overlay"}></div>

        <div className={"dark"}>
          <h2 className={"person-name  montserrat-bold"}>{name}</h2>
          <a
            className={"montserrat-regular fighting-khaki"}
            href={`https://www.instagram.com/${insta}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className={"montserrat-regular fighting-khaki"}>@{insta}</h3>
          </a>
          <p className={"montserrat-regular"}>{bio}</p>
        </div>
      </div>
    </div>
  );
}
