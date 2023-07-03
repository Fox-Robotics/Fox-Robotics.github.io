import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/FoxLogo.png";
import { HashLink as Link } from "react-router-hash-link";

export const ProjectsNavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img className="logo-img" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={
                activeLink === "Home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Home")}
            >
              Home
            </Link>
            <Link
              to="/#donate"
              className={
                activeLink === "Donate" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Donate")}
            >
              Donate
            </Link>
            <Link
              to="/projects?projectId=${projectId}#Description"
              className={
                activeLink === "Description"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Description")}
            >
              Description
            </Link>

            <Link
              to="/projects?projectId=${projectId}#Technologies"
              className={
                activeLink === "Technologies"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Technologies")}
            >
              Technologies
            </Link>
            <Link
              to="/projects?projectId=${projectId}#Images"
              className={
                activeLink === "Images" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Images")}
            >
              Images
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
