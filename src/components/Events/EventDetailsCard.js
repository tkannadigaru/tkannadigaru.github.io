import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function EventDetailsCard(props) {

  const { imagePath, title, description, date, plansheet, eventAgenda } = props;

  let agendaItems = [];
  console.log(plansheet)
  if (eventAgenda && typeof eventAgenda === "object") {
    agendaItems = Object.keys(eventAgenda).map((time) => ({
      time,
      item: eventAgenda[time]
    }));
  }

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {title}
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {description}
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Date: {date}
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <a href={plansheet}>{title} planning sheet</a>
              </h1>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Event Agenda: {agendaItems.length > 0 ? (
                <table style={{ border: "1px solid white", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={{ border: "1px solid white", padding: "8px" }}>Time</th>
                      <th style={{ border: "1px solid white", padding: "8px" }}>Agenda</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventAgenda.map((agendaItem, index) => (
                      <tr key={index}>
                        <td style={{ border: "1px solid white", padding: "8px" }}>
                          {agendaItem.time}
                        </td>
                        <td style={{ border: "1px solid white", padding: "8px" }}>
                          {agendaItem.item}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No agenda items available.</p>
              )}
              </h1>
              <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={imagePath}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default EventDetailsCard;