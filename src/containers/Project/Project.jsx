import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./project.css";

const Project = () => {
  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        <SectionTitle
          title="Project"
          subtitle="Here you will find about about some of the Personal projects i worked on."
        />
        <div className="project-wrapper">
          <div className="project-info-container">
            <img
              className="project-image"
              src="https://user-images.githubusercontent.com/46987044/204976766-2391d8bd-6f00-4e14-9016-a8e7957e78f8.png"
              alt="portfolio app"
            />
            <div>
              <p className="project-title">Portfolio website</p>
              <p className="project-info">
                Portfolio website built using React.js
              </p>
              <div className="project-repo-link">
                <a
                  href="https://github.com/prajwal-m/prajwalm.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="project-info-container">
            <img
              className="project-image"
              src="https://user-images.githubusercontent.com/46987044/204993083-668e5c49-036e-476b-8a32-9c19d6d3e0a6.png"
              alt="game app"
            />
            <div>
              <p className="project-title">Guess the number game</p>
              <p className="project-info">
                A number Guessing game built using React Native.
              </p>
              <div className="project-repo-link">
                <a
                  href="https://github.com/prajwal-m/guessing-game-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="project-info-container">
            <img
              className="project-image"
              src="https://user-images.githubusercontent.com/46987044/204995667-9483a86c-b5e5-4d00-b9c6-0fad2f3a8ad6.png"
              alt="recipe app"
            />
            <div>
              <p className="project-title">Recipe App</p>
              <p className="project-info">
                A recipe app for meals of different cusine built using React
                Native.
              </p>
              <div className="project-repo-link">
                <a
                  href="https://github.com/prajwal-m/recipe-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
