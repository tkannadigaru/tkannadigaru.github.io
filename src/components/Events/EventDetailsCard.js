import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineCalendar, AiOutlineEnvironment, AiOutlineFileText, AiOutlineArrowRight } from "react-icons/ai";

function EventDetailsCard(props) {

  const { imagePath, title, description, date, plansheet, eventAgenda, location, mapsLink } = props;
  const agendaItems = Array.isArray(eventAgenda) ? eventAgenda : [];

  return (
    <section>
      <Container fluid className="event-details-section" id="event-details">
        <Particle />
        <Container className="event-details-container">
          <Row className="event-hero-row">
            <Col lg={5} className="event-image-column">
              <img src={imagePath} alt={title} className="event-details-image" />
            </Col>
            <Col lg={7} className="event-copy-column">
              <span className="event-eyebrow">Event details</span>
              <h1 className="event-details-title">{title}</h1>
              <p className="event-details-description">{description}</p>
              <div className="event-meta-list">
                {date && <div className="event-meta-item"><AiOutlineCalendar /><span><small>Date</small>{date}</span></div>}
                {location && <div className="event-meta-item"><AiOutlineEnvironment /><span><small>Location</small>{location}</span></div>}
              </div>
              <div className="event-action-row">
                {mapsLink && <a className="event-action event-action-primary" href={mapsLink} target="_blank" rel="noopener noreferrer">Get directions <AiOutlineArrowRight /></a>}
                {plansheet && <a className="event-action event-action-secondary" href={plansheet} target="_blank" rel="noopener noreferrer"><AiOutlineFileText /> Planning sheet</a>}
              </div>
            </Col>
          </Row>
          <section className="event-agenda-panel">
            <div className="event-section-heading">
              <span className="event-eyebrow">On the day</span>
              <h2>Event agenda</h2>
            </div>
            {agendaItems.length > 0 ? (
              <div className="event-agenda-list">
                {agendaItems.map((agendaItem, index) => (
                  <div className="event-agenda-item" key={`${agendaItem.time}-${index}`}>
                    <time>{agendaItem.time}</time>
                    <span>{agendaItem.item}</span>
                  </div>
                ))}
              </div>
            ) : <p className="event-empty-state">Agenda details will be added soon.</p>}
          </section>
        </Container>
      </Container>
    </section>
  );
}
export default EventDetailsCard;