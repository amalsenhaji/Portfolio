import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Senhaji Amal </span>
            from <span className="purple"> Rabat, Morocco.</span>
            <br />
            <br />
            Passionate <span className="purple">
              Junior Software Developer
            </span>{" "}
            with a deep enthusiasm for coding and technology. As a graduate of
            1337 Programming School, I've immersed myself in a wide range of
            programming languages and software development methodologies. My
            journey in coding has been driven by curiosity and a desire to
            create innovative solutions.
            <br />
         
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
           
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
           
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Senhaji Amal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
