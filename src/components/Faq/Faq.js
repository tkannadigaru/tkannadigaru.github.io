import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";


function Faq() {
return (
    <Container fluid className="about-section">
      <Particle />
      <MDBContainer borderless style={{maxWidth: '1000px'}}>
      <MDBAccordion className="mb-4 text-light rounded bg-dark">
        <MDBAccordionItem collapseId={1} headerTitle="How can i join Trollhättan Kannadagira Sangha?">
          <code>Send an email to the representatives, with details like your name and phone number,
            Someone will contact you soon to add you to the write mailing group, whatsapp group etc.
          </code>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Who can join?">
          <code>Some connection to Karnataka is expected, but is not required. It is an open forum to celebrate the culture of
            Kannadigas. Anyone interested is welcome to join and participate. Keep in mind, that a majority of the events will
            be held in Kannada.
          </code>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Is there a cost to join?">
          <code>To join, No. But all activities are planned collectively and anyone willing to partake will be expected to
            contribute a fair amount. All expenditure and activities are transparent and shared with all members
          </code>
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="How many and how frequent are the events?">
          <code>There is no set frequency, location or timing for events. We try to do as much as we can. Keep an eye out on the
            events page to know more
          </code>
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
    </Container>
    
  );
}

export default Faq;