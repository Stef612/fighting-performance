import React from "react";
import person1 from "../images/person1.png";
import person2 from "../images/person2.png";
import person3 from "../images/person3.png";
import person4 from "../images/person4.png";
import vid1 from "../images/vid1.mp4";
import vid3 from "../images/vid3.mp4";
import vid4 from "../images/vid4.mp4";

import "./teamSection.css";
import Person from "./Person";

export default function TeamSection({ language }) {
  const teamMembers = [
    {
      image: person1,
      name_en: "George Kossivas",
      insta: "george_kossivas",
      bio_gr:
        "Πιστοποιημένος προπονητής Muay Thai με πάνω από 20 χρόνια εμπειρίας στο μποξ, το kickboxing και την προσωπική προπόνηση. Αφοσιωμένος αθλητής και προπονητής, ειδικεύεται στην ανάπτυξη εξατομικευμένων προγραμμάτων γυμναστικής και τεχνικών πολεμικών τεχνών για πελάτες όλων των επιπέδων, από αρχάριους έως επαγγελματίες.",
      bio_en: `Certified Muay Thai coach with over 20 years of experience in boxing, kickboxing, and personal training. A dedicated athlete and coach, specializing in developing tailored fitness programs and martial arts techniques for clients of all levels, from beginner to pro.`,
      video: null,
    },
    {
      image: person2,
      name_en: "Katerina Kouts",
      insta: "katerinakoutsog",
      bio_gr:
        "Πιστοποιημένη προπονήτρια πυγμαχίας και ενεργή αθλήτρια πυγμαχίας από το 2010, μέλος της Ελληνικής Εθνικής Ομάδας Πυγμαχίας, με 10 τίτλους Πανελλήνιων Πρωταθλημάτων και συμμετοχή στο Ευρωπαϊκό Πρωτάθλημα Γυναικών. Έχει ολοκληρώσει σπουδές στην Επιστήμη του Αθλητισμού και τη Διατροφή, κατέχοντας πτυχίο Βιολογίας από το Πανεπιστήμιο Αθηνών.",
      bio_en: `Certified boxing coach also competitive boxer since 2010 and member of the Greek National Boxing Team, with 10 Greek championship titles,and a European Women's Championships. Has finished studies in Sports Science and Nutrition, with a degree in Biology from the University of Athens.`,
      video: null,
    },
    {
      image: person3,
      name_en: "Lazaros Apidopoulos",
      insta: "lazarosapid",
      bio_gr:
        "Πιστοποιημένος προπονητής kickboxing με πάνω από 20 χρόνια εμπειρίας στις πολεμικές τέχνες, κάτοχος εθνικών τίτλων στο καράτε και το kickboxing (3x χρυσό). Κάτοχος μεταπτυχιακού τίτλου στις Τεχνολογίες Πληροφορικής και Επικοινωνιών (ICT) και στην Ειδική Αγωγή. Επαγγελματικό ρεκόρ kickboxing 7-3. Προπονεί νευροτυπικά και νευροδιαφορετικά παιδιά και ενήλικες.",
      bio_en: `Certified kickboxing coach with 20+ years in martial arts, holding national titles in karate and kickboxing (3x gold). Master's in ICT and Special Education. Professional kickboxing record of 7-3. Trains neurotypical and neurodiverse children and adults.`,
      video: null,
    },
  ];

  return (
    <div className={`teamSection__overall-div-${teamMembers.length}`}>
      <div className={`title-part`}>
        <h1 className={` meet-h2`}>
          {language ? "meet" : "Γνωρισε "}
          <span> {language ? "the team" : "την ομαδα "}</span>
        </h1>
      </div>
      <div className={`team`}>
        {teamMembers.map((member, index) => (
          <Person
            styleNumber={teamMembers.length}
            key={index}
            image={member.image}
            name={member.name_en}
            insta={member.insta}
            bio={language ? member.bio_en : member.bio_gr}
            video={member.video}
          />
        ))}
      </div>
    </div>
  );
}
