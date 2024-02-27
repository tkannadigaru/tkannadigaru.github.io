import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import EventCards from "./EventCards";
import Particle from "../Particle";

function NextEvent() {

  const [futurecontent, setFutureContent] = useState(null);

    useEffect(() => {
      async function fetchContent() {
        const response = await fetch('contents/upcoming-events.json');
        const data = await response.json();
        const filteredItem = data.find(item => item.status === 'active');
        console.log(filteredItem)
        setFutureContent(filteredItem);
      }
      fetchContent();
    }, []);

    if (!futurecontent) {
      return <div>Loading...</div>;
    }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Next Big <strong className="purple">Event </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some details about upcoming events by Trollhättan Kannadigas
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> 
        {

            <Col md={4} className="project-card">
              <EventCards
                imgPath={futurecontent.imagePath}
                title={futurecontent.title}
                description={futurecontent.description}
                status={futurecontent.status}
              />
            </Col>
        }
        </Row>
      </Container>
    </Container>
  );
}

export default NextEvent;
