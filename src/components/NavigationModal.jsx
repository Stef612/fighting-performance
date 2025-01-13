import React from "react";
import Modal from "react-modal";
import "./navigationModal.css"; // Ensure this is correctly linked

const NavigationModal = ({
  isOpen,
  onRequestClose,
  changeToGreek,
  changeToEnglish,
}) => {
  return (
    <Modal
      isOpen={isOpen} // Use the isOpen prop to control modal visibility
      onRequestClose={onRequestClose} // Close the modal
      className="NavigationModal__overall-div" // Apply CSS classes
    >
      <div className="c-container">
        <p onClick={onRequestClose}>Back</p>
      </div>
      <ul className="montserrat-bold hide-small-width">
        <li>
          <a href="#about-section" onClick={onRequestClose}>
            <p>About</p>
          </a>
        </li>
        <li>
          <a href="#schedule-section" onClick={onRequestClose}>
            <p>Schedule</p>
          </a>
        </li>
        <li>
          <a href="#contact-section" onClick={onRequestClose}>
            <p>Contact</p>
          </a>
        </li>
        <li>
          <p className="flags">
            <a
              className="greek-flag"
              onClick={() => {
                changeToGreek();
                onRequestClose();
              }}
            >
              <span className="fi fi-gr"> </span>
            </a>
            <div className="divider" />
            <a
              className="uk-flag"
              onClick={() => {
                changeToEnglish();
                onRequestClose();
              }}
            >
              <span className="fi fi-gb"></span>
            </a>
          </p>
        </li>
      </ul>
    </Modal>
  );
};

export default NavigationModal;
