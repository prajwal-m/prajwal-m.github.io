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
              Adaptable and collaborative Front End Engineer with 6+ years of
              experience building performant, accessible, and user-friendly web
              and mobile applications. Proven ability to improve SEO,
              performance, and maintainable UIs using modern JavaScript
              frameworks and tooling. Seeking to leverage my skills to
              contribute to impactful user interfaces and delightful customer
              experiences.
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
                <p className="large-text">6+</p>
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
