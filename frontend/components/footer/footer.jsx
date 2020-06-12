import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        {/* LOGO IMAGE */}
        {/* ONE BLOCK */}
      </div>
      <div className="footer-left">
        <div className="footer-left-section">
          <h2 className="footer-title">About me</h2>
          <p>
            I'm software developer currently living in Seattle. Hopcamp is my
            first web application and I'm really proud of it.
          </p>
          <p>
            If you would like to see more of my work, please visit my personal
            site at: <a href="https://chong-anson.github.io/portfolio/">here</a>
          </p>
          <div className="profile-links">
            <a href="https://github.com/Chong-anson">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ansonchongch/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://angel.co/u/anson-chong">
              <i className="fab fa-angellist"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <h2 className="footer-title">
          {" "}
          About Hopcamp, a pixel-perfect clone of Hipcamp
        </h2>
        <p>
          Hopcamp is built using PostgreSQL, Ruby on Rails, ReactJS and Redux.
        </p>
      </div>
      <div className="footer-bottom">
        <p>&copy; Hopcamp by Anson Chong </p>
      </div>
    </div>
  );
};

export default Footer;
