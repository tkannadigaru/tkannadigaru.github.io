import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import knflag from "../Assets/knflag.png";
import enflag from "../Assets/enflag.png";
import svflag from "../Assets/svflag.png";
import brandLogo from "../Assets/karantaka-flag-logo.jpg";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { Language } from '../Language';


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-mark" onClick={() => updateExpanded(false)}>
          <img src={brandLogo} className="brand-logo" alt="Kannada flag" />
          <span>
            <strong>Trollhättan</strong>
            <small>Kannadigaru</small>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <nav>
          <Language.Consumer>
            {({ handleSetLanguage, lang }) => (
              <><button className="language-button" aria-label="Switch to Kannada" onClick={() => handleSetLanguage('kn')}><img src={knflag} className="img-fluid logo" alt="Kannada" /></button></>
            )}
          </Language.Consumer>
          <Language.Consumer>
            {({ handleSetLanguage, lang }) => (
              <><button className="language-button" aria-label="Switch to English" onClick={() => handleSetLanguage('en')}><img src={enflag} className="img-fluid logo" alt="English" /></button></>
            )}
          </Language.Consumer>
          <Language.Consumer>
            {({ handleSetLanguage, lang }) => (
              <><button className="language-button" aria-label="Switch to Swedish" onClick={() => handleSetLanguage('sv')}><img src={svflag} className="img-fluid logo" alt="Swedish" /></button></>
            )}
          </Language.Consumer>
          </nav>
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/nextevent"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Next Event
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/events"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                More Events
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/faq"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> FAQ
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
