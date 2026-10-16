import { useState, useRef,useEffect } from "react"; 
import "./About.css";

import aboutImage from "../assets/abouto1.jpg";

function About() {

    /*for scollup animation */
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
    /*animation up and down and going anywher on page scrolling */
    useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    {
      threshold: 0.4,
    }
  );

  if (aboutRef.current) {
    observer.observe(aboutRef.current);
  }

  return () => {
    observer.disconnect();
  };
}, []);

  return (

    <section id="about" className="about" ref={aboutRef}>

      <div className={isVisible ? "about-content show" : "about-content"}>

        <p className="about-subtitle">
          ABOUT RHYTHM
        </p>

        <h2>
          Music is not just sound.
          <br />
          It's an experience.
        </h2>

        <p className="about-description">
          Rhythm brings artists, people and unforgettable
          musical experiences together. We believe music has
          the power to connect people, create memories and
          inspire emotions.
        </p>

        <a href="#portfolio" className="about-button">
          Discover More
        </a>

      </div>

      <div className={isVisible ? "about-image-wrapper show" : "about-image-wrapper"}>

        <img
          src={aboutImage}
          alt="Live music performance"
          className="about-image"
        />

        <div className="about-card">
          <strong>10+</strong>
          <span>Years of Experience</span>
        </div>

      </div>

    </section>
  );
}

export default About;