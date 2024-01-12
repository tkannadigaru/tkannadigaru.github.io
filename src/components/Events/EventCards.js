import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function EventCards(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${props.title}`);
  };

  return (
    <div onClick={handleClick}>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {"\n"}
          {"\n"}
        </Card.Body>
      </Card>
    </div>
  );
}
export default EventCards;
