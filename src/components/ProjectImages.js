import React from "react";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Roboticsprojects from "./RoboticsProjectList";

export default function ProjectImages({ projectId }) {
  console.log(Roboticsprojects);
  return (
    <section className="projectPhotos" id="Images">
      <Container>
        <h2>Images</h2>
        <Row>
          {Roboticsprojects[projectId].images.map((image, index) => {
            return <ProjectCard key={index} images={[image]} />;
          })}
        </Row>
      </Container>
    </section>
  );
}
