import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Language } from '@react-lang/language'

function ContactCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            <p>Email: trollhattenkannadigaru@gmail.com</p>
            <p>Facebook: https://facebook.com/groups/964408994572232</p>
          </p>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default ContactCard;
