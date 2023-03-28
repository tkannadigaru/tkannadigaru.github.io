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
    <Container fluid className="about-section">
      <Particle />
      <MDBContainer borderless style={{maxWidth: '1000px'}}>
      <MDBAccordion className="mb-4 text-light rounded bg-dark">
        {content.map((item, index) => (
            <MDBAccordionItem collapseId={index} headerTitle={item.question}>
                <code>{item.answer}</code>
            </MDBAccordionItem>
        ))}
      </MDBAccordion>
    </MDBContainer>
    </Container>
    
  );
}

export default Faq;