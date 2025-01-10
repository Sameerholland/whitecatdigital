import React, { useState, useEffect } from "react";
import "../../Css/Carousel.css"; // Import your CSS file

export default function Portfolio({ isActive }) {
  const [celebCount, setCelebCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [cityCount, setCityCount] = useState(0);

  const targetCeleb = 400;
  const targetEvent = 800; // Example target for events
  const targetCity = 200; // Example target for cities

  useEffect(() => {
    if (!isActive) return;

    // Reset counts when slide becomes active
    setCelebCount(0);
    setEventCount(0);
    setCityCount(0);

    const celebInterval = setInterval(() => {
      setCelebCount((prev) => {
        if (prev < targetCeleb) {
          return prev + 1;
        } else {
          clearInterval(celebInterval);
          return prev;
        }
      });
    }, 10);

    const eventInterval = setInterval(() => {
      setEventCount((prev) => {
        if (prev < targetEvent) {
          return prev + 2; // Faster counting for events
        } else {
          clearInterval(eventInterval);
          return prev;
        }
      });
    }, 10);

    const cityInterval = setInterval(() => {
      setCityCount((prev) => {
        if (prev < targetCity) {
          return prev + 1;
        } else {
          clearInterval(cityInterval);
          return prev;
        }
      });
    }, 20); // Slower counting for cities

    return () => {
      clearInterval(celebInterval);
      clearInterval(eventInterval);
      clearInterval(cityInterval);
    };
  }, [isActive]);

  return (
    <div className="crousel-portfolio">
    <div className="portfolio-container">
      <div className="portfolio-stat">
        <p className="portfolio-count">{celebCount}+</p>
        <p className="portfolio-label">Active Celebrities </p>
      </div>
      <div className="portfolio-stat">
        <p className="portfolio-count">{eventCount}+</p>
        <p className="portfolio-label">Events Completed</p>
      </div>
      <div className="portfolio-stat">
        <p className="portfolio-count">{cityCount}+</p>
        <p className="portfolio-label">Across Cities</p>
      </div>
    </div>
    </div>
  );
}
