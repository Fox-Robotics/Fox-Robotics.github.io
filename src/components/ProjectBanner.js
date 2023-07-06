import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import VideoImage from "./VideoImage";

export default function ProjectBanner({ projectId, projectList }) {
  let githubButton;
  let projectButton;
  if (projectList[projectId].githubLink) {
    githubButton = (
      <a
        href={projectList[projectId].githubLink}
        className="text-warning text-decoration-none"
      >
        <button className="text-warning" href="#project">
          See on Github
        </button>
      </a>
    );
  }

  if (projectList[projectId].pageLink) {
    projectButton = (
      <a
        href={projectList[projectId].pageLink}
        className="text-warning text-decoration-none font-size fs-1"
      >
        <button className="text-warning" href="#project">
          <h2> Try it yourself</h2>
          <ArrowRightCircle size={25} />
        </button>
      </a>
    );
  }

  return (
    <section className="banner" id="project">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <div>
              <h1>{projectList[projectId].title}</h1>
              <p>{projectList[projectId].landingDescription}</p>
              {projectButton}
              {githubButton}
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div>
              <VideoImage media={projectList[projectId].media[0]} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
