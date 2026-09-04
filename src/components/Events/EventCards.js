import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function EventCards(props) {
  const navigate = useNavigate();
  const [detailsAvailable, setDetailsAvailable] = useState(false);
  const canOpenDetails = props.clickable !== false && detailsAvailable;

  useEffect(() => {
    if (props.clickable === false) {
      return;
    }

    const eventFileName = props.title.replace(/\s/g, "_");
    const eventDetailsPath = `contents/${eventFileName}.json`;

    fetch(eventDetailsPath, { method: "HEAD" })
      .then((response) => setDetailsAvailable(response.ok))
      .catch(() => setDetailsAvailable(false));
  }, [props.title, props.clickable]);

  const handleClick = () => {
    if (canOpenDetails) {
      navigate(`/events/${props.title}`);
    }
  };

  return (
    <div
      className={canOpenDetails ? "event-card-link" : "event-card-static"}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
      role={canOpenDetails ? "link" : undefined}
      tabIndex={canOpenDetails ? 0 : undefined}
      aria-label={canOpenDetails ? `View details for ${props.title}` : undefined}
    >
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
