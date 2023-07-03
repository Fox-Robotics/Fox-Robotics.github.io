import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/Fox-Robotics">
                <img src={github} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/FoxRobotics">
                <img src={facebook} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/foxrobs/">
                <img src={instagram} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
