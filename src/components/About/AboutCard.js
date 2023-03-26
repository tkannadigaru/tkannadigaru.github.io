import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            The history of Trollhättan Kannadigara sangha is very short,
            we were just a few families who were getting together for the 
            occational ugadi, holi and deepavali festivals.
            <br />
            <br />

            This transitioned into upwards of 20 families with organized events
            for Ugadi and Deepawali.
            <br />
            <br />

            And in March 2023, we finally registered with Skattaverket 
            to have our official kannada sangha
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
