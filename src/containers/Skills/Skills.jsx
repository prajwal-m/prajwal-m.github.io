import React, { useEffect, useMemo } from "react";
import "./skills.css";
import SkillList from "../../components/SkillList/SkillList";
import TagCloud from "TagCloud";

const Skils = () => {
  const skillList = useMemo(
    () => [
      "JavaScript",
      "CSS",
      "HTML",
      "React",
      "Next.js",
      "GraphQL",
      "Strapi",
      "Dato CMS",
      "Contentful",
      "Web Accessibility",
      "Git",
      "DOM Manipulation",
      "Stencil",
      "React Native",
      "Node Js",
      "Aframe",
    ],
    [],
  );

  useEffect(() => {
    const tagCloudEl = document.querySelector(".tagcloud");
    if (!tagCloudEl) {
      try {
        TagCloud(".content", skillList, { radius: 200 });
      } catch (error) {
        console.error("Error initializing TagCloud:", error);
      }
    }
  }, [skillList]);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-header-container">
          <h2 className="skills-header">Skills</h2>
          <p className="skills-subheading">
            Here you will find more information about my skills and expertise.
          </p>
        </div>
      </div>
      <div className="skills-content-container">
        <SkillList skillsInfo={skillList} />
        <div class="content"></div>
      </div>
    </section>
  );
};

export default Skils;
