import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCards from "./EventCards";
import Particle from "../Particle";

function Events() {

  const [content, setContent] = useState(null);
  const [futurecontent, setFutureContent] = useState(null);

  useEffect(() => {
      async function fetchContent() {
        const response = await fetch('contents/past-events.json');
        const data = await response.json();
        const reversedata = data.reverse();
        setContent(reversedata);
      }
      fetchContent();
    }, []);

    useEffect(() => {
      async function fetchContent() {
        const response = await fetch('contents/upcoming-events.json');
        const data = await response.json();
        const filteredItems = data.filter(item => item.status !== 'active');
        setFutureContent(filteredItems);
      }
      fetchContent();
    }, []);

    if (!content) {
      return <div>Loading...</div>;
    }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Upcoming <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some details about upcoming events by Trollhättan Kannadigas
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> 
        { !futurecontent || futurecontent.length === 0 ? (
            <Col md={4} className="project-card">
              <EventCards
                imgPath={"eventphotos/noevents.jpg"}
                title={"No upcoming events planned"}
                description={"We are working on planning the next big event"}
              />
            </Col>
        ): (
        futurecontent.map((item, index) => (
            <Col md={4} className="project-card">
              <EventCards
                imgPath={item.imagePath}
                title={item.title}
                description={item.description}
                status={item.status}
              />
            </Col>
            )))}
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Past <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some details about recent events by Trollhättan Kannadigas
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {content.map((item, index) => (
            <Col md={4} className="project-card">
              <EventCards
                imgPath={item.imagePath}
                title={item.title}
                description={item.description}
              />
            </Col>
        ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Events;
