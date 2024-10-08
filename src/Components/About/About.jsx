import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [crtSelection, setCrtSelection] = useState(0);
  // const aboutData = [
  //   {
  //     title:""
  //   }
  // ]
  return (
    <div className="about new-col">
      <div className="title">Hey there! I'm Sarthak.</div>
      <div className="about-select">
        <div className="about-heading">
          <div className="about-element about-active">
            About
          </div>
          <div className="about-element">
            hello
          </div>
          <div className="about-element">
            hello
          </div>
        </div>
        <div className="about-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga
          quibusdam dolorem alias quis voluptate. Error, non ex. Dicta amet
          explicabo sequi blanditiis illum adipisci est. Architecto nihil
          tenetur, eum ipsam consequatur sint sequi laboriosam fugit atque
          maxime ea accusantium iure ipsum excepturi maiores, voluptatibus autem
          doloremque! Ullam nam illum explicabo quibusdam qui pariatur corrupti
          eos facilis sint ipsa. Sed amet animi ab facilis incidunt. Sed fuga
          enim excepturi alias obcaecati ratione nam quas nemo expedita
          voluptatum facere quaerat earum, possimus distinctio architecto
          temporibus natus error dolore. Voluptate, officia! Rem doloribus autem
          perferendis, voluptatem mollitia earum quo, laboriosam soluta voluptas
        </div>
      </div>
      <div className="social-links">
        <div className="social-link">
          <a href="https://www.linkedin.com/in/sarthak-mittal-/">Linkedin</a>
        </div>
        <div className="social-link">
          <a href="https://github.com/iam-sarthak">Github</a>
        </div>
        <div className="social-link">
          <a href="https://twitter.com/sarmittal">X</a>
        </div>
        <div className="social-link">
          <a href="https://dev.to/sarmittal">Dev.to</a>
        </div>
      </div>
    </div>
  );
};

export default About;
