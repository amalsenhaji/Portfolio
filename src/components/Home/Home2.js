import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";

import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have learned a lot, I think…
              🤷‍♂️
              <br />
              <br />I am fluent in{" "}
              <b className="purple"> C++, Javascript and Go, </b> with interests
              in building{" "}
              <b className="purple">
                {" "}
                new web technologies, products, and blockchain.
              </b>{" "}
              I develop products using{" "}
              <b className="purple"> Node.js, React.js, and Next.js.</b> I have
              strong problem-solving abilities and proficiency in{" "}
              <b className="purple">
                {" "}
                C, C++, Go, JavaScript, TypeScript, HTML, and CSS
              </b>
              . I understand algorithms, UNIX systems, network and system
              administration, graphics programming, and object-oriented
              concepts.
              <br />
              <br />I am experienced with{" "}
              <b className="purple">
                {" "}
                Next.js, React.js, Node.js, Vue.js 3, Nuxt.js 3,{" "}
              </b>
              and <b className="purple"> Supabase </b> and excel in group
              collaboration and communication.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amalsenhaji"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amal-senhaji-4533b72b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_amal__senhaji/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
