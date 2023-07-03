import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Roboticsprojects from "./RoboticsProjectList";

export default function ProjectBanner({ projectId }) {
  return (
    <section className="banner" id="project">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>{Roboticsprojects[projectId].title}</h1>
              <p>{Roboticsprojects[projectId].landingDescription}</p>
              <a
                href={Roboticsprojects[projectId].githubLink}
                className="text-warning text-decoration-none"
              >
                <button className="text-warning" href="#project">
                  See on Github
                </button>
              </a>{" "}
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img
                src={Roboticsprojects[projectId].images[0]}
                alt="Header Img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
