// EventPage.js
import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";

function EventPage() {

  const { eventId } = useParams();

  const [content, setContent] = useState(null);

  useEffect(() => {
      async function fetchContent() {
        const response = await fetch(`${process.env.PUBLIC_URL}/contents/${eventId}.json`);
        const data = await response.json();
        setContent(data);
      }
      fetchContent();
    }, [eventId]);

    return (
      <div>
          { !content || content.length === 0 ? (
                <EventDetailsCard
                  imagePath={"../eventphotos/noevents.jpg"}
                  title={"No details available for this event"}
                  description={"We are working on adding details for this event. Watch this space for updates"}
                />
          ): (
            content.map((item, index) => (
                <EventDetailsCard
                  imagePath={"../" + item.imagePath}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  plansheet={item.plansheet}
                  location={item.location}
                  mapsLink={item.mapsLink}
                  eventAgenda={item.eventAgenda}
                />
              )))}
            </div>
    );
}

export default EventPage;