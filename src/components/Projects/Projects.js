import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Döviz Ceviri"
              description="Created By Mustafa KILIC"
              ghLink="https://github.com/mustafakilic38/dovizCeviri"
              demoLink="https://dovizceviri.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project"
              description="Preparing"
              ghLink="https://github.com/mustafakilic38"
              demoLink="https://github.com/mustafakilic38"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Project"
              description="Preparing"
              ghLink="https://github.com/mustafakilic38"
              demoLink="https://github.com/mustafakilic38"              
            />
          </Col>

    
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
