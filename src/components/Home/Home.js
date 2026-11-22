import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import hampiimage from "../../Assets/hampi-home-bg.jpg"
import { Language } from '../../Language'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

// Set this to true to show the next-event banner again.
const SHOW_NEXT_EVENT_BANNER = false;

// Edit the banner message and links here.
// title and detailsLink are optional. If not provided, the next event's title and registration link will be used instead.
const NEXT_EVENT_BANNER_INFO = {
  title: "",
  message: "was very successful, Thanks to everyone who participated! The planning sheet and whatsapp group are live for 1 more week, make sure you download all photos",
  detailsLink: "",
  detailsText: "Event details",
};

function Home() {
  const [nextEvent, setNextEvent] = useState(null);

  useEffect(() => {
    if (!SHOW_NEXT_EVENT_BANNER) return;

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
        {SHOW_NEXT_EVENT_BANNER && nextEvent && (
          <Container className="home-event-banner-container">
            <div className="home-event-banner">
              <Link className="home-event-banner-next" to="/nextevent">
                <strong>
                  {NEXT_EVENT_BANNER_INFO.title || nextEvent.title}
                  {" "}
                  {NEXT_EVENT_BANNER_INFO.message}
                </strong>
              </Link>
              <a
                className="home-event-banner-register"
                href={NEXT_EVENT_BANNER_INFO.detailsLink || nextEvent.registrationLink || `${process.env.PUBLIC_URL}/#/nextevent#event-details`}
                target={NEXT_EVENT_BANNER_INFO.detailsLink || nextEvent.registrationLink ? "_blank" : undefined}
                rel={NEXT_EVENT_BANNER_INFO.detailsLink || nextEvent.registrationLink ? "noopener noreferrer" : undefined}
              >
                {NEXT_EVENT_BANNER_INFO.detailsText} <AiOutlineArrowRight />
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
