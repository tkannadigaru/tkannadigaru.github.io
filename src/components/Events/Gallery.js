import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Particle from "../Particle";

function Gallery() {
  const { eventId } = useParams();
  const [galleries, setGalleries] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/contents/galleries.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gallery list could not be loaded");
        }
        return response.json();
      })
      .then(setGalleries)
      .catch(() => setHasError(true));
  }, []);

  const gallery = galleries?.find((item) => item.eventId === eventId || (!item.eventId && item.title === eventId));
  const publicUrl = process.env.PUBLIC_URL || "";
  const galleryTitle = gallery?.title || eventId;

  return (
    <main className="gallery-page">
      <Particle />
      <Container className="gallery-content">
        <span className="event-eyebrow">Past event photos</span>
        <h1 className="gallery-title">{galleryTitle}</h1>
        {galleries === null && !hasError && <p className="gallery-message">Loading photos...</p>}
        {hasError && <p className="gallery-message">The photo gallery could not be loaded.</p>}
        {galleries !== null && !hasError && !gallery && (
          <p className="gallery-message">A photo gallery has not been added for this event yet.</p>
        )}
        {gallery && gallery.images.length === 0 && (
          <p className="gallery-message">Photos from this event will be added soon.</p>
        )}
        {gallery?.images.length > 0 && (
          <div className="gallery-grid">
            {gallery.images.map((image) => {
              const imageUrl = `${publicUrl}/gallery/${encodeURIComponent(gallery.eventId)}/${encodeURIComponent(image)}`;
              return (
                <a className="gallery-photo" href={imageUrl} target="_blank" rel="noreferrer" key={image}>
                  <img src={imageUrl} alt={`${gallery.title} event`} loading="lazy" />
                </a>
              );
            })}
          </div>
        )}
      </Container>
    </main>
  );
}

export default Gallery;