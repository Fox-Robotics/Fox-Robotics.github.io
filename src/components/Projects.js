import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp2 from "../assets/img/gradient.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const Roboticsprojects = [
    {
      title: "Line Follower",
      description: "V1",
      imgUrl: projImg1,
    },
    {
      title: "Line Follower",
      description: "v2",
      imgUrl: projImg2,
    },
    {
      title: "Line Follower",
      description: "v4",
      imgUrl: projImg3,
    },
    {
      title: "Conmutated power supply",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Radiofrequency tansmitter and receiver",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Quadpod",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  const CodingProjects = [
    {
      title: "Space Apps",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

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
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {CodingProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
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
