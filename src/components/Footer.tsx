import React from "react";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="App__footer">
      <div className="container sections" id="contact-section">
        <div className="md-column">
          <h4 id="hello">Say hello.</h4>
          <p className="mt-3">
            Whether you want to say hello, hang out, or to collaborate. Feel
            free to email me at <a href="mailto:hi@ramidem.me">hi@ramidem.me</a>
            . And I will get back to you as soon as I can. I am also on{" "}
            <a
              href="https://twitter.com/ramidem"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://github.com/ramidem/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/ramidem/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            , and{" "}
            <a
              href="https://www.instagram.com/ramidem/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </div>
      <small>
        made with <abbr title="love">❤️</abbr> and lots of{" "}
        <abbr title="coffee">☕</abbr>
      </small>
    </footer>
  );
};

export default Footer;
