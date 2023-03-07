import React, { useEffect, useState } from "react";
import MapBox from "../components/MapBox";

function signedUp() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v3/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);
  console.log(eventData);

  return (
    <div className="m-0 h-[100vh] w-[100vw]">
      <MapBox />
    </div>
  );
}

export default signedUp;
