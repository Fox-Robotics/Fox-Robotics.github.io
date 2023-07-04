import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectBanner({ projectId, projectList }) {
  return (
    <section className="banner" id="project">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <div>
              <h1>{projectList[projectId].title}</h1>
              <p>{projectList[projectId].landingDescription}</p>
              <a
                href={projectList[projectId].githubLink}
                className="text-warning text-decoration-none"
              >
                <button className="text-warning" href="#project">
                  See on Github
                </button>
              </a>{" "}
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div>
              <img src={projectList[projectId].images[0]} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
