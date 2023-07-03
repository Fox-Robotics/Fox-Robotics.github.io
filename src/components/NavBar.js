import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/FoxLogo.png";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const NavBar = () => {
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
            <Link
              to="/#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Link>
            <Link
              to="/#connect"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact
            </Link>
            <Link
              to="/#donate"
              className={
                activeLink === "donate" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("donate")}
            >
              Donate
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
