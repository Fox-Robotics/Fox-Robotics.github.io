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
        <button className="text-warning m-1" href="#project">
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
            <div className="d-flex justify-content-evenly flex-column flex-grow-1 h-100">
              <h1>{projectList[projectId].title}</h1>
              <p>{projectList[projectId].landingDescription}</p>
              {projectButton}
              {githubButton}
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="d-flex align-items-center justify-content-center">
              <VideoImage
                media={projectList[projectId].media[0]}
                height={400}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
