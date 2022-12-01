import React from "react";
import "./sectionTitle.css";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title-header-container">
      <h2 className="section-title-header">{title}</h2>
      {subtitle && <p className="section-title-subheading">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
