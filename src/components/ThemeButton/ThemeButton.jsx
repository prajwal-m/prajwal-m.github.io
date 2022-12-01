import React from "react";
import "./themeButton.css";

const ThemeButton = () => {
  const toggleTheme = () => {
    const appEl = document.querySelector(".App");

    if (appEl && appEl.classList.contains("dark-mode")) {
      appEl.classList.remove("dark-mode");
    } else {
      appEl.classList.add("dark-mode");
    }
  };

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      <i class="fa-solid fa-circle-half-stroke"></i>
    </button>
  );
};

export default ThemeButton;
