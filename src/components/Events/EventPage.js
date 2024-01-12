// EventPage.js
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";

function EventPage() {

  const location = useLocation();
  const currentPath = decodeURIComponent(location.pathname);
  const pathSegments = currentPath.split("/");
  const eventName = pathSegments[pathSegments.length - 1];
  console.log(eventName)

  const [content, setContent] = useState(null);

  useEffect(() => {
      async function fetchContent() {
        const formattedEventName = eventName.replace(/\s/g, "_");
        const response = await fetch(`../contents/${formattedEventName}.json`);
        const data = await response.json();
        setContent(data);
      }
      fetchContent();
    }, [eventName]);

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
                  eventAgenda={item.eventAgenda}
                />
              )))}
            </div>
    );
}

export default EventPage;