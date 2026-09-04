import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import hampiimage from "../../Assets/hampi-home-bg.jpg"
import { Language } from '../../Language'
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
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
