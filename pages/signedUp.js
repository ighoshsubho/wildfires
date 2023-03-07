import React, { useEffect, useState } from "react";
import Loader from '../components/Loader';
import MapHeader from "../components/MapHeader";
import Maph from "../components/Map";
function signedUp() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <MapHeader/>
      { !loading ? <Maph eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default signedUp;
