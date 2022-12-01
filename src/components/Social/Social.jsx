import React from "react";
import "./social.css";

const Home = () => {
  return (
    <div className="social-list-wrapper">
      <ul className="social-list">
        <li className="social-list-item">
          <a
            href="https://github.com/prajwal-m"
            target="_blank"
            className="social-list-item-link"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a
            href="https://www.linkedin.com/in/prajwal-m-91b839171/"
            target="_blank"
            rel="noreferrer"
            className="social-list-item-link"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a
            href="mailto:prajwalm42@gmail.com"
            className="social-list-item-link"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
        </li>
        <li className="social-list-item">
          <a href="tel:+91 9945260744" className="social-list-item-link">
            <i class="fa-solid fa-phone"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
