import React from "react";
import { Container, Row } from "react-bootstrap";
import { Technologies } from "./Technologies";

export default function ProjectDescription({ projectId, projectList }) {
  return (
    <section className="project" id="Description">
      <Container>
        <Row className="justify-content-center text-center">
          <h2>Description</h2>
          <p>{projectList[projectId].longDescription}</p>
        </Row>
      </Container>
      <Technologies
        projectId={projectId}
        projectList={projectList}
      ></Technologies>
    </section>
  );
}
