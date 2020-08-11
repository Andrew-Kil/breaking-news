import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="icon-attribution">
        Icons made by{" "}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      &copy; {new Date().getFullYear()} - Made with{" "}
      <span className="heart">&hearts;</span> by{" "}
      <a
        href="https://github.com/Andrew-Kil"
        target="_blank"
        rel="noopener noreferrer">
        Andrew Kil
      </a>
    </footer>
  );
};

export default Footer;
