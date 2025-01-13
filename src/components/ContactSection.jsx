import React from "react";
import img1 from "../images/1.webp";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";

import "./contactSection.css";

export default function ContactSection({ language }) {
  return (
    <div className="contactSection__overall-div">
      <div className="mid-content">
        <div class="left-part hide-big-width">
          <div class="top-left-part">
            <h2 class="fighting-khaki">
              {language ? "follow us" : "ακολουθησε μας"}
            </h2>
            <div class="social-icons">
              <a
                href="https://www.instagram.com/fightingperformance_fp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@fightingperformance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a
                href="https://web.facebook.com/p/Fighting-Performance-61555601196770/?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div class="bottom-left-part">
            <div class="right-map-and-email">
              <a
                href="https://www.instagram.com/fightingperformance_fp/"
                target="_blank"
              >
                <div class="image-grid">
                  <div class="grid-item">
                    <img src={img1} alt="Image 1" />
                  </div>
                  <div class="grid-item">
                    <img src={img2} alt="Image 2" />
                  </div>
                  <div class="grid-item">
                    <img src={img3} alt="Image 3" />
                  </div>
                  <div class="grid-item">
                    <img src={img4} alt="Image 4" />
                  </div>
                  <div class="grid-item">
                    <img src={img5} alt="Image 5" />
                  </div>
                  <div class="grid-item">
                    <img src={img6} alt="Image 6" />
                  </div>
                  <div class="grid-item">
                    <img src={img7} alt="Image 7" />
                  </div>
                  <div class="grid-item">
                    <img src={img8} alt="Image 8" />
                  </div>
                  <div class="grid-item">
                    <img src={img9} alt="Image 9" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="right-part hide-big-width">
          <div class="top-right-part">
            <h2 class="fighting-khaki">
              {" "}
              {language ? "contact us" : "Επικοινωνησε μαζι μας"}
            </h2>
            <div class="contact-info">
              <h3 class="fighting-khaki">
                tel:
                <span class="white-text">
                  <a href="tel:+306983464767"> +30 698 346 4767</a>
                </span>
              </h3>
              <h3 class="fighting-khaki">
                email:
                <span class="white-text"> fightingperformance24@gmail.com</span>
              </h3>
            </div>
          </div>
          <div class="bottom-right-part">
            <div class="iframe-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.8889501625163!2d23.850410099999998!3d38.14277510000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1753e464accd9%3A0xb64dec3cfa5ed032!2sFighting%20Performance!5e0!3m2!1sen!2sgr!4v1724678412072!5m2!1sen!2sgr"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="black-area"></div>
    </div>
  );
}
