import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ProjectMembers({ projectId, projectList }) {
  return (
    <Container className="members" id="members">
      <Col className="d-flex justify-content-center row text-center">
        <h2>Members</h2>
        <Col>
          {projectList[projectId].members.map((member, index) => {
            return <p key={index}>{member}</p>;
          })}
        </Col>
      </Col>
    </Container>
  );
}
