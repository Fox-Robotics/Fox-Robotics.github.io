import React from "react";
import { Container, Row } from "react-bootstrap";
import { Technologies } from "./Technologies";
import Roboticsprojects from "./RoboticsProjectList";

export default function ProjectDescription({ projectId }) {
  return (
    <section className="project" id="Description">
      <Container>
        <Row className="justify-content-center text-center">
          <h2>Description</h2>
          <p>{Roboticsprojects[projectId].longDescription}</p>
        </Row>
      </Container>
      <Technologies projectId={projectId}></Technologies>
    </section>
  );
}
