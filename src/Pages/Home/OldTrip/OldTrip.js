import React, { useEffect, useState } from "react";
import OldTripCard from "./OldTripCard";

const OldTrip = () => {
  const [trips, setTrip] = useState([]);

  useEffect(() => {
    fetch("https://travel-server-002imran.vercel.app/oldTrip")
      .then((res) => res.json())
      .then((data) => setTrip(data));
  }, []);

  return (
    <div className="mt-56">
      <div className="text-center my-5 mb-6">
        <h2 className="text-5xl font-semibold text-orange-900">PREVIOUS TRIP PHOTO GALARY</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-2">
        {trips.map((trip) => (
          <OldTripCard key={trip._id} trip={trip}></OldTripCard>
        ))}
      </div>
    </div>
  );
};

export default OldTrip;
