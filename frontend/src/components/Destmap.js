"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaSearchPlus, FaSearchMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const locations = [
    {
      lat: 26.8467,
      lng: 80.9462,
      image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50",
      text: "Gomti River View",
    },
    {
      lat: 26.8500,
      lng: 80.9490,
      image: "https://images.unsplash.com/photo-1523519482228-ccdcddbfbb87",
      text: "Hazratganj Market",
    },
    {
      lat: 26.8485,
      lng: 80.9429,
      image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8bb",
      text: "Bara Imambara",
    },
];

function MapControls() {
  const map = useMap();

  const move = (dir) => {
    const center = map.getCenter();
    const offset = 0.01;
    const zoom = map.getZoom();
    if (dir === "up") map.setView([center.lat + offset, center.lng], zoom);
    if (dir === "down") map.setView([center.lat - offset, center.lng], zoom);
    if (dir === "left") map.setView([center.lat, center.lng - offset], zoom);
    if (dir === "right") map.setView([center.lat, center.lng + offset], zoom);
  };

  return (
    <div className="pointer-events-auto fixed bottom-12 right-16 z-[1001] w-[150px] h-[150px] flex justify-center items-center">
      <div className="relative w-full h-full">
        <button
          onClick={() => move("up")}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full bg-white p-4 text-black shadow-md w-14 h-14 flex justify-center items-center"
        >
          <FaArrowUp className="text-2xl" />
        </button>
        <button
          onClick={() => move("down")}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-white p-2 text-black shadow-md w-14 h-14 flex justify-center items-center"
        >
          <FaArrowDown className="text-2xl" />
        </button>
        <button
          onClick={() => move("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md w-14 h-14 flex justify-center items-center"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button
          onClick={() => move("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md w-14 h-14 flex justify-center items-center"
        >
          <FaArrowRight className="text-2xl" />
        </button>
        <button
          onClick={() => map.zoomIn()}
          className="absolute top-[-50px] left-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md w-14 h-14 flex justify-center items-center"
        >
          <FaSearchPlus className="text-2xl" />
        </button>
        <button
          onClick={() => map.zoomOut()}
          className="absolute top-[-50px] right-1/4 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md w-14 h-14 flex justify-center items-center"
        >
          <FaSearchMinus className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

// Create a dynamic map component that only loads on the client side
const Map = dynamic(() => import('./MapComponent'), {
  ssr: false,
  loading: () => <div className="h-screen w-screen bg-gray-100" />
});

export default function Destmap() {
  return (
    <div className="relative h-screen w-screen">
      <Map locations={locations} />
    </div>
  );
}
