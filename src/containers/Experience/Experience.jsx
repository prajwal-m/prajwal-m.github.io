import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <SectionTitle
          title="Experience"
          subtitle="Here you will find more information about my work experience and projects."
        />
        <div class="timeline">
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Aug 2020 - present</p>
            <h5>
              Software Engineer <span>- Y Media Labs</span>
            </h5>
            <p>
              - Developed a product design page for Polestar 2 (an electric car
              brand) for both desktop and mobile. Complex animations and
              innovative design resulted in +88% time on site, +111% Session
              duration, -59% bounce rate.
              <br />- Developed a completely accessible design system for Mayo
              clinic using stencil where the components can be used in projects
              with multiple frameworks such as React, Angular and Vue.
            </p>
          </div>
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Jul 2019 - Jul 2020</p>
            <h5>
              Associate Software Engineer <span>- Y Media Labs</span>
            </h5>
            <p>
              - Worked on MEP project, a program to have information of
              companies and construction projects in one place for contractors
              and MEP users.worked on a filter feature with complex selection
              logic filtering out the construction projects based on multiple
              criteria.
              <br />
              - Worked on an internal project integrating a directory of all
              employees along with a messenger feature which could be used for
              direct communication between employees or by creating groups.
              <br />- Worked on revamping the company website.
            </p>
          </div>
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Jan 2019 - Feb 2019</p>
            <h5>
              Web Developer Intern <span>- Amiti Software technologies</span>
            </h5>
            <p>
              Created a dashboard where teachers can upload content or study
              material, modify the content and attach tags to the content which
              can be consumed by students(Built using React.js).
            </p>
          </div>
          <div class="timeline-item">
            <div class="tl-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <p class="tl-duration">Aug 2015 - May 2019</p>
            <h5>
              Bachelor's degree{" "}
              <span>- PES Institute of Technology, Bangalore</span>
            </h5>
            <p>
              Completed degree in Information Science and Engineering with 7.98
              cgpa. Learnt various subjects like Database Management System,
              Computer Networks, Operating System, Machine Learning etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
