import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-content">
        <div className="footer-info-wrapper">
          <p className="footer-title">PRAJWAL</p>
          <p className="footer-subtitle">Frontend developer.</p>
        </div>

        <div className="footer-social-wrapper">
          <p className="footer-title">Social</p>
          <ul className="footer-social-list">
            <li className="footer-social-list-item">
              <a
                href="https://github.com/prajwal-m"
                target="_blank"
                rel="noreferrer"
                className="footer-social-list-item-link"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="footer-social-list-item">
              <a
                href="https://www.linkedin.com/in/prajwal-m-91b839171/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-list-item-link"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li className="footer-social-list-item">
              <a
                href="mailto:prajwalm42@gmail.com"
                className="footer-social-list-item-link"
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
            </li>
            <li className="footer-social-list-item">
              <a
                href="tel:+91 9945260744"
                className="footer-social-list-item-link"
              >
                <i class="fa-solid fa-phone"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
