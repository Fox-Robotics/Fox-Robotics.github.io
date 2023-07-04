import React from "react";
import { Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export default function ProjectImages({ projectId, projectList }) {
  return (
    <section className="projectPhotos" id="Images">
      <Container>
        <h2>Images</h2>
        <Row>
          {projectList[projectId].images.map((image, index) => {
            return <ProjectCard key={index} images={[image]} />;
          })}
        </Row>
      </Container>
    </section>
  );
}
