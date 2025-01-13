import "./App.css";
import { Header } from "./components/Header";
import TeamSection from "./components/TeamSection";
import ScheduleSection from "./components/ScheduleSection";
import ContactSection from "./components/ContactSection";
import NavigationModal from "./components/NavigationModal";
import { useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [language, setLanguage] = useState(true);
  const [loading, setLoading] = useState(true); // New loading state

  const changeToEnglish = () => {
    setLanguage(true);
  };

  const changeToGreek = () => {
    setLanguage(false);
  };

  const handleVideoLoaded = () => {
    // When all videos signal they are ready, remove the placeholder
    setLoading(false);
    console.log("lllllll");
  };
  console.log(loading);
  return (
    <div className="App">
      {loading && <Loading />}

      <div style={{ display: loading ? "none" : "block" }}>
        <NavigationModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          language={language}
          changeToEnglish={changeToEnglish}
          changeToGreek={changeToGreek}
        />
        <Header
          onClick={() => setModalIsOpen(true)}
          language={language}
          switchLanguage={() => setLanguage(!language)}
          changeToEnglish={changeToEnglish}
          changeToGreek={changeToGreek}
        />
        <section id="about-section">
          <TeamSection language={language} />
        </section>
        <section id="schedule-section">
          <ScheduleSection
            language={language}
            onVideoLoaded={handleVideoLoaded}
          />
        </section>
        <section id="contact-section">
          <ContactSection language={language} />
        </section>
      </div>
    </div>
  );
}

export default App;
