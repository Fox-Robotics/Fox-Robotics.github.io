import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/gradient.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Roboticsprojects from "./RoboticsProjectList";
import codingProjects from "./CodingProjectList";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    A list of projects were the team has been able to use their
                    knowledge to create amazing things
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item style={{ width: "50%" }}>
                        <Nav.Link className="teamterm col-6" eventKey="first">
                          Robotics
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item style={{ width: "50%" }}>
                        <Nav.Link className="teamterm" eventKey="second">
                          Fox Coding
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {Roboticsprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                type={"robotics"}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {codingProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                type={"coding"}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
