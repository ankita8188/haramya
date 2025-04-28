'use client';

import Welcome from '@/components/Welcome';
import Cookies from '@/components/Cookies';
import { useState, useEffect, useRef } from 'react';
import LocationPopup from '@/components/LocationPopup';

const MapPage = () => {
  const [marker, setMarker] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const overlayRef = useRef(null);

  const handleOverlayClick = (e) => {
    const overlay = overlayRef.current;
    const rect = overlay.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMarker({ x, y });
    setShowPopup(true);
  };

  // Handle full-screen resize
  useEffect(() => {
    const handleResize = () => {
      setMarker(null); // Reset marker on screen resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
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
        {/* Google Map iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.581010906885!2d80.954577814884!3d26.85053568316002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdcc4f6d52ff%3A0x7fc7eebc617de59c!2sUniversity%20of%20Lucknow!5e0!3m2!1sen!2sin!4v1618921764584!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Transparent overlay div */}
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1, // above iframe
            backgroundColor: 'transparent', // invisible but clickable
          }}
        ></div>

        {/* Marker */}
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
              zIndex: 2, // above overlay
            }}
          />
        )}
      </div>

      {/* Popup */}
      {showPopup && <LocationPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default MapPage;
