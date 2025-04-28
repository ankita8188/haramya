"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

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
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full bg-white p-2 text-black shadow-md  w-14 h-14  flex justify-center items-center"
        >
          <FaArrowDown className="text-2xl" />
        </button>
        <button
          onClick={() => move("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md  w-14 h-14  flex justify-center items-center"
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button
          onClick={() => move("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md  w-14 h-14  flex justify-center items-center"
        >
          <FaArrowRight className="text-2xl" />
        </button>
        <button
          onClick={() => map.zoomIn()}
          className="absolute top-[-50px] left-1/4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md  w-14 h-14  flex justify-center items-center"
        >
          <FaSearchPlus className="text-2xl" />
        </button>
        <button
          onClick={() => map.zoomOut()}
          className="absolute top-[-50px] right-1/4 transform translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black shadow-md w-14 h-14  flex justify-center items-center"
        >
          <FaSearchMinus className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default function Destmap() {
  return (
    <div className="relative h-screen w-screen">
<MapContainer center={[26.8467, 80.9462]} zoom={13} className="h-full w-full  z-0">
<TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />

{locations.map((loc, i) => (
  <Marker
    key={i}
    position={[loc.lat, loc.lng]}
    icon={L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    })}
  >
<Popup maxWidth={570}>
<div className="w-full max-w-[550px] p-4 sm:p-6 rounded-xl shadow-xl bg-white flex flex-col items-center space-y-4">
  {/* Image + Text (Row) */}
  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full">
    <img
      src={loc.image}
      alt="location"
      className="w-full sm:w-64 h-[200px] object-cover rounded-lg"
    />
    <div className="flex items-center">
      <p className="text-xl sm:text-2xl font-semibold">{loc.text}</p>
    </div>
  </div>

  {/* Button Centered Below */}
  <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg shadow-md">
    Explore
  </button>
</div>

</Popup>




  </Marker>
))}


        <MapControls />
      </MapContainer>
    </div>
  );
}
