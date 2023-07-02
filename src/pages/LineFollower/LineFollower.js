import React from "react";
import { Footer } from "../../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import LineFollowerImg1 from "../../assets/img/LineFollowerV1,1.jpg";
import LineFollowerImg2 from "../../assets/img/LineFollowerV1,2.jpg";
import LineFollowerImg3 from "../../assets/img/LineFollowerV1,3.jpg";
import { Skills } from "../../components/Skills";
import { ProjectCard } from "../../components/ProjectCard";
import { ProjectsNavBar } from "../../components/ProjectsNavBar";

export default function LineFollower() {
  const Roboticsprojects = [
    {
      title: "Top View",
      description: "",
      imgUrl: LineFollowerImg1,
    },
    {
      title: "Top View",
      description: "",
      imgUrl: LineFollowerImg2,
    },
    {
      title: "Top View",
      description: "",
      imgUrl: LineFollowerImg3,
    },
  ];

  return (
    <div>
      <ProjectsNavBar></ProjectsNavBar>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <div>
                <h1>Line Follower</h1>
                <p>
                  Here at Fox Robotics, we are looking for opportunities to
                  change the way you look at technologies. We are innovators, we
                  are disruptors.
                </p>
                <a
                  href="https://github.com/Fox-Robotics/Line-follower-v1"
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
                <img src={LineFollowerImg1} alt="Header Img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="project" id="Description">
        <Container>
          <Row className="justify-content-center text-center">
            <h2>Description</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Row>
        </Container>
        <Skills></Skills>
      </section>
      <section className="projectPhotos" id="Images">
        <Container>
          <h2>Images </h2>
          <Row>
            {Roboticsprojects.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
