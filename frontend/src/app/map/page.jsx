'use client';

import Welcome from '@/components/Welcome';
import Cookies from '@/components/Cookies';
import { useState, useEffect } from 'react';
import LocationPopup from '@/components/LocationPopup';

const MapPage = () => {
  const [marker, setMarker] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = (e) => {
    const img = e.target;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMarker({ x, y });
    setShowPopup(true); // Show the popup
  };

  // Handle full-screen resize
  useEffect(() => {
    const handleResize = () => {
      setMarker(null); // Reset the marker when the screen size changes
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100vw', // Full viewport width
        height: '100vh', // Full viewport height
        backgroundColor: '#ddd',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Welcome />
      <Cookies />

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <img
          src="/staticmap.webp"
          alt="Lucknow Map"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensure the map fills the screen without distortion
            cursor: 'crosshair',
          }}
          onClick={handleImageClick}
        />

        {marker && (
          <div
            style={{
              position: 'absolute',
              top: marker.y - 41,
              left: marker.x - 12,
              width: 25,
              height: 41,
              backgroundImage:
                'url(https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          />
        )}
      </div>

      {showPopup && <LocationPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default MapPage;
