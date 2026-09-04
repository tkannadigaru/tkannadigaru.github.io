import React, {useEffect, useState} from "react";
import EventDetailsCard from "./EventDetailsCard";
import Particle from "../Particle";

function NextEvent() {

  const [eventContent, setEventContent] = useState(null);

    useEffect(() => {
      async function fetchContent() {
        const response = await fetch('contents/upcoming-events.json');
        const data = await response.json();
        const activeEvent = data.find(item => item.status === 'active');

        if (!activeEvent) {
          setEventContent([]);
          return;
        }

        const eventFileName = activeEvent.title.replace(/\s/g, "_");
        const detailsResponse = await fetch(`contents/${eventFileName}.json`);
        const details = await detailsResponse.json();
        setEventContent(details);
      }
      fetchContent();
    }, []);

    if (!eventContent) {
      return <div>Loading...</div>;
    }

  return eventContent.length > 0 ? (
    eventContent.map((item, index) => (
      <EventDetailsCard
        key={`${item.title}-${index}`}
        imagePath={item.imagePath}
        title={item.title}
        description={item.description}
        date={item.date}
        location={item.location}
        mapsLink={item.mapsLink}
        plansheet={item.plansheet}
        eventAgenda={item.eventAgenda}
      />
    ))
  ) : (
    <div className="event-content-empty">
      <Particle />
      <p>No next event has been announced yet.</p>
    </div>
  );
}

export default NextEvent;
