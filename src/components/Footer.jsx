import React from "react";
import "./style.css/Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container bd-container">
          <h1 className="footer__title">Vasanth Salomon</h1>
          <p className="footer__desc">
            I'm Vasanth salomon and this is my personal website, consult me
            here.
          </p>

          <div className="footer__social">
            <a href="#" className="footer__link">
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/bedimcode"
              className="footer__link"
              id="profile-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
            <a href="#" className="footer__link">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          <p className="footer__copy">
            &#169; 2024 Vasanth salomon. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
