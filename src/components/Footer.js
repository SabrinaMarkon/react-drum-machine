import React from "react";

const Footer = () => (
  <footer className="center-align p-2 madewithlove">
    Made with{" "}
    <span className="madewithlove__heart" aria-hidden="true">
      ❤
    </span>{" "}
    by{" "}
    <a
      href="http://sabrinamarkon.com"
      target="_blank"
      rel="noopener noreferrer"
      className="madewithlove__name"
    >
      Sabrina Markon
    </a>
  </footer>
);

export default Footer;
