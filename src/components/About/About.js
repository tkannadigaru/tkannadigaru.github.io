import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import ContactCard from "./ContactCard";
import knkavimap from "../../Assets/karnataka-kavi-map.jpg"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Trollhättan Kannadigara Sangha</strong>
            </h1>
            <Aboutcard />
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={knkavimap}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
        </Row>
        <Row style={{ justifyContent: "left", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "left",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "left" }}>
              <strong className="purple">Contact Information</strong>
            </h1>
            <ContactCard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
