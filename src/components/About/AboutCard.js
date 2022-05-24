import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Noor Muhammad </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />I am a junior software engineer at Optima Geeks Lahore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch movies
            </li>
            <li className="about-activity">
              <ImPointRight /> North Area Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Rules of Optimization: Rule 1: Don’t do it. Rule 2 (for experts only): Don’t do it yet.” {" "}
          </p>
          <footer className="blockquote-footer">Michael A. Jackson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
