import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/FoxLogo.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

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
            {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</Nav.Link> */}
            <Nav.Link
              href="/"
              className={
                activeLink === "Home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#Description"
              className={
                activeLink === "Description"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Description")}
            >
              Description
            </Nav.Link>
            <Nav.Link
              href="#Technologies"
              className={
                activeLink === "Technologies"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Technologies")}
            >
              Technologies
            </Nav.Link>
            <Nav.Link
              href="#Images"
              className={
                activeLink === "Images" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("Images")}
            >
              Images
            </Nav.Link>
          </Nav>
          {/* <span className="navbar-text">
             
              <HashLink to='#connect'>
                <button className="vvd"><span>Donate</span></button>
              </HashLink>
            </span> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
