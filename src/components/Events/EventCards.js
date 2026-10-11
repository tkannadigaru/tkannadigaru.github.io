import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function EventCards(props) {
  const navigate = useNavigate();
  const [detailsAvailable, setDetailsAvailable] = useState(false);
  const canOpenGallery = props.gallery === true;
  const canOpenDetails = !canOpenGallery && props.clickable !== false && detailsAvailable;

  useEffect(() => {
    if (props.clickable === false || canOpenGallery) {
      return;
    }

    const eventFileName = props.eventId || props.title.replace(/\s/g, "_");
    const eventDetailsPath = `contents/${eventFileName}.json`;

    fetch(eventDetailsPath, { method: "HEAD" })
      .then((response) => setDetailsAvailable(response.ok))
      .catch(() => setDetailsAvailable(false));
  }, [props.title, props.eventId, props.clickable, canOpenGallery]);

  const handleClick = () => {
    if (canOpenGallery) {
      navigate(`/gallery/${encodeURIComponent(props.eventId || props.title)}`);
    } else if (canOpenDetails) {
      navigate(`/events/${encodeURIComponent(props.eventId || props.title)}`);
    }
  };

  return (
    <div
      className={canOpenDetails || canOpenGallery ? "event-card-link" : "event-card-static"}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleClick();
        }
      }}
      role={canOpenDetails || canOpenGallery ? "link" : undefined}
      tabIndex={canOpenDetails || canOpenGallery ? 0 : undefined}
      aria-label={canOpenGallery ? `View photos from ${props.title}` : canOpenDetails ? `View details for ${props.title}` : undefined}
    >
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
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
