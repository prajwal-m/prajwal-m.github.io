import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section-wrapper" id="about">
      <div className="main-container">
        <div className="about-header-container">
          <h2 className="about-header">About Me</h2>
          <p className="about-subheading">
            Here you will find more information about me, what I do, and my
            achievments.
          </p>
        </div>
        <div className="about-content-wrapper">
          <div className="about-content">
            <h2 className="about-content-heading">Get to know me!</h2>
            <p className="about-content-details">
              I'm a front-end developer with a Bachelor's degree in Information
              Science Engineering from PES Institute of Technology, Bangalore
              and 3+ years of software development experience. I'm experienced
              in front-end technologies such as HTML5, CSS3, JavaScript and
              Typescript. I have also developed and maintained various
              JavaScript applications and has exceptional knowledge of React.
              Currently exploring React Native.
            </p>
            <div class="btn-container">
              <a href="#test" target="_blank" class="main-btn">
                <span class="btn-text">Resume</span>
                <span class="btn-icon">
                  <i class="fa-solid fa-download"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="about-card-wrapper">
            <div className="about-card">
              <div className="about-text">
                <p className="large-text">10+</p>
                <p className="small-text">
                  Projects
                  <br />
                  completed
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-text">
                <p className="large-text">3+</p>
                <p className="small-text">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-text">
                <p className="large-text">5+</p>
                <p className="small-text">
                  Certified
                  <br />
                  courses
                </p>
              </div>
            </div>

            <div className="about-card">
              <div className="about-text">
                <p className="large-text">3+</p>
                <p className="small-text">
                  Awards
                  <br />
                  Recieved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
