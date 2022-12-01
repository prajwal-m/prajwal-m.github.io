import React from "react";
import "./skillList.css";

const SkillList = ({ skillsInfo }) => {
  const renderSkill = (skill) => (
    <div className="skill" key={skill}>
      {skill}
    </div>
  );

  return (
    <div className="skills-list-wrapper">
      {skillsInfo && skillsInfo.map((skill) => renderSkill(skill))}
    </div>
  );
};

export default SkillList;
