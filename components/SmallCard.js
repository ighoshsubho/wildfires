import React from "react";
import Image from "next/image";
function SmallCard({ img, location, distance }) {
  return (
    <div className="m-2 mb-5 p-2 mt-5 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out">
      <h2>{location}</h2>
      <h3 className="text-gray-500">{distance}</h3>
    </div>
  );
}

export default SmallCard;