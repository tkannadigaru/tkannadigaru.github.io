import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import hampiimage from "../../Assets/hampi-home-bg.jpg"
import { Language } from '../../Language'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Home() {
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    async function loadNextEvent() {
      try {
        const response = await fetch("contents/upcoming-events.json");
        if (!response.ok) throw new Error("Upcoming events could not be loaded");
        const upcomingEvents = await response.json();
        const activeEvent = upcomingEvents.find((event) => event.status === "active");
        if (!activeEvent) return;

        const detailsResponse = await fetch(`contents/${activeEvent.eventId}.json`);
        if (!detailsResponse.ok) throw new Error("Next event details could not be loaded");
        const details = await detailsResponse.json();
        setNextEvent({ ...activeEvent, ...(Array.isArray(details) ? details[0] : details) });
      } catch {
        setNextEvent(null);
      }
    }

    loadNextEvent();
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        {nextEvent && (
          <Container className="home-event-banner-container">
            <div className="home-event-banner">
              <Link className="home-event-banner-next" to="/nextevent">
                Next event: <strong>{nextEvent.title}</strong>
              </Link>
              <a
                className="home-event-banner-register"
                href={nextEvent.registrationLink || `${process.env.PUBLIC_URL}/#/nextevent#event-details`}
                target={nextEvent.registrationLink ? "_blank" : undefined}
                rel={nextEvent.registrationLink ? "noopener noreferrer" : undefined}
              >
                Register Now <AiOutlineArrowRight />
              </a>
            </div>
          </Container>
        )}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <Language.Consumer>
                {({ get }) => <><h1 style={{ paddingBottom: 15 }} className="heading">
                
                {get('welcome')}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1></>}
              </Language.Consumer>

              
              <Language.Consumer>
                {({ get }) => <><h1 className="heading-name">
                {get('weare')}
                  <strong className="main-name"> {get('message')}</strong>
                </h1></>}
              </Language.Consumer>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Col>

            <Col md={5} className="home-image-column" style={{ paddingBottom: 20 }}>
              <img
                src={hampiimage}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <Link className="event-home-link" to="/nextevent">
                Discover our next event <AiOutlineArrowRight />
              </Link>
            </Col>

          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
