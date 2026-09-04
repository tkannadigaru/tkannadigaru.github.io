import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";


function Faq() {
    const [content, setContent] = useState(null);
    useEffect(() => {
        async function fetchContent() {
          const response = await fetch('contents/faq.json');
          const data = await response.json();
          setContent(data);
        }
        fetchContent();
      }, []);
    
      if (!content) {
        return <div>Loading...</div>;
      }

return (
    <Container fluid className="about-section faq-section">
      <Particle />
      <MDBContainer className="faq-container" borderless>
      <div className="faq-intro">
        <span className="faq-eyebrow">Need to know</span>
        <h1 className="project-heading">Frequently Asked <strong className="purple">Questions</strong></h1>
        <p>Find quick answers about Trollhättan Kannadigaru and our community.</p>
      </div>
      <MDBAccordion className="faq-accordion">
        {content.map((item, index) => (
            <MDBAccordionItem key={item.question || index} collapseId={index} headerTitle={item.question}>
                <p className="faq-answer">{item.answer}</p>
            </MDBAccordionItem>
        ))}
      </MDBAccordion>
    </MDBContainer>
    </Container>
    
  );
}

export default Faq;