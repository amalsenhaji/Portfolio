import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Resto from "../../Assets/Projects/Resto.png";
import Dashboard_Resto from "../../Assets/Projects/Dashboard_Resto.png";
import Login_Page from "../../Assets/Projects/Login_Page.png";
import ft_irc from "../../Assets/Projects/ft_irc.png";
import inception from "../../Assets/Projects/inception.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resto}
              title="Resto"
              description="Resto is an innovative marketplace platform designed for restaurants in the United States. It streamlines order management, reservations, and customer interactions, enhancing operational efficiency and customer engagement. 
              With advanced features tailored to the food industry, Resto aims to elevate the overall dining experience and connect customers with a variety of dining establishments seamlessly."
              ghLink="https://github.com/amalsenhaji/Resto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard_Resto}
              title="Dashboard_Resto"
              description="Dashboard Resto is the administrative interface for the Resto platform, providing restaurant managers and staff with tools to efficiently manage menu items, pricing, reservations, and orders. It offers valuable analytics and insights to optimize operations and enhance decision-making, supporting restaurants in maintaining high standards of service and operational excellence."
              ghLink="https://github.com/amalsenhaji/Dashboard_Resto"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ft_irc}
              title="ft_irc"
              description="This is a simple IRC (Internet Relay Chat) server implemented in C++. It allows users to connect, communicate, and interact in real-time chat channels. The server is designed to be easy to set up and use, making it a great starting point for learning about network programming and IRC protocol."
              ghLink="https://github.com/amalsenhaji/ft_irc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inception}
              title="inception"
              description="Inception is a project that establishes a Docker-based infrastructure within a virtual machine. It entails running services in dedicated containers, crafting custom Docker images using Alpine or Debian, and orchestrating components like NGINX, WordPress, MariaDB containers, and data storage volumes all interconnected via a Docker network."
              ghLink="https://github.com/amalsenhaji/inception"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Login_Page}
              title="Login_Page"
              description="This is a simple login page designed using HTML, CSS, and Font Awesome icons. It allows users to create an account or sign in using their email and password, or through social media accounts like Google, GitHub, LinkedIn, and Instagram."
              ghLink="https://github.com/amalsenhaji/Login-Page"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
