import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCards from "./EventCards";
import Particle from "../Particle";
import ugadi2023 from "../../Assets/Events/ugadi-2023.jpg";

function Events() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Past <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some details about recent events by Trollhättan Kannadigas
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EventCards
              imgPath={ugadi2023}
              title="Deepavali 2019"
              description="A small group of 5 families getting together to celebrate Ugadi in the year 2019"
            />
          </Col>

          <Col md={4} className="project-card">
            <EventCards
              imgPath={ugadi2023}
              title="Deepavali 2021"
              description="A much larger group of 30 people celebrating Deepavali in the year 2021"
            />
          </Col>

          <Col md={4} className="project-card">
            <EventCards
              imgPath={ugadi2023}
              title="Ugadi 2022"
              description="A large group of kannadigas coming together to celebrate Ugadi 2022"
            />
          </Col>

          <Col md={4} className="project-card">
            <EventCards
              imgPath={ugadi2023}
              title="Celebrating Deepavali 2022"
              description="Celebrating Deepavali 2022"
            />
          </Col>

          <Col md={4} className="project-card">
            <EventCards
              imgPath={ugadi2023}
              title="Ugadi 2023"
              description="Our very first Ugadi Celebration as a registered Kannada Sangha 2023"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Events;
