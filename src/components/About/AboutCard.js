import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Language } from '@react-lang/language'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Language.Consumer>
              {({ get }) => <p>{get('about_1')}</p>}
            </Language.Consumer>
            <br />
            <br />
            <Language.Consumer>
              {({ get }) => <p>{get('about_2')}</p>}
            </Language.Consumer>
            <br />
            <br />

            <Language.Consumer>
              {({ get }) => <p>{get('about_3')}</p>}
            </Language.Consumer>
          </p>
        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
