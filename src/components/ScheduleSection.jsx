import React from "react";
import "./scheduleSection.css";
import vid from "../images/vid.mp4";
import logo2 from "../images/logo2.png";
import weekly from "../images/WEEKLY2.png";

// Sample schedule data
const schedule = [
  {
    day: "Monday",
    slots: [
      { time: "09:30-10:30", subject: "Early Workout" },
      { time: "18:00-19:00", subject: "Kids" },
      { time: "19:00-20:00", subject: "Teens" },
      { time: "20:15-21:30", subject: "Youth & Adults" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "18:00-19:00", subject: "Kids & Teens" },
      { time: "19:00-20:00", subject: "Strength & Conditioning" },
      { time: "20:15-21:30", subject: "Boxing" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "18:00-19:00", subject: "Kids" },
      { time: "19:00-20:00", subject: "Teens" },
      { time: "20:15-21:30", subject: "Youth & Adults" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "09:30-10:30", subject: "Early Workout" },
      { time: "18:00-19:00", subject: "Kids & Teens" },
      { time: "19:00-20:00", subject: "Strength & Conditioning" },
      { time: "20:15-21:30", subject: "Boxing" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "18:00-19:00", subject: "Open Gym" },
      { time: "19:00-20:45", subject: "Sparring" },
    ],
  },
  {
    day: "Saturday",
    slots: [{ time: "10:00-11:00", subject: "Early Workout" }],
  },
];

export default function ScheduleSection({ language, onVideoLoaded }) {
  return (
    <div className="scheduleSection__outer-div">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="scheduleSection__background-video"
        onLoadedData={onVideoLoaded}
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="scheduleSection__content">
        <div className="scheduleSection__top">
          <img
            className="weekly"
            src={weekly}
            alt="fighting performance logo"
          />
        </div>
        <div className="scheduleSection__mid">
          {schedule.map((daySchedule) => (
            <div className="schedule-day" key={daySchedule.day}>
              <h3>{daySchedule.day}</h3>
              <ul>
                {daySchedule.slots.map((slot, index) => (
                  <li key={index} className="time-slot">
                    <span className="time">{slot.time}</span>
                    <span className="subject">{slot.subject}</span>
                    {index !== daySchedule.slots.length - 1 && "-"}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="scheduleSection__bottom">
          <h4>
            {language
              ? "For inquiries regarding private sessions, feel free to contact us."
              : "Για ερωτήσεις σχετικά με ιδιωτικές συνεδρίες, επικοινωνήστε μαζί μας."}
          </h4>
        </div>
      </div>
    </div>
  );
}
