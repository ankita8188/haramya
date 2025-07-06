'use client';

import Welcome from '@/components/Welcome';
import Cookies from '@/components/Cookies';
import { useState, useEffect, useRef } from 'react';
import LocationPopup from '@/components/LocationPopup';
import { useRouter, useSearchParams } from 'next/navigation';
import Mapnavbar from '@/components/Mapnavbar';
const MapPage = () => {
  const router = useRouter();
  const search= useSearchParams();
  const [current, setCurrent] = useState(null);
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
  const link =["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104438.31784976838!2d82.90870686378503!3d25.320894920254027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1750958716180!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206100.4727038095!2d75.62574460384303!3d26.885421390788306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1750958814920!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891334.5092660676!2d73.3471910483667!3d15.350084489106958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e1!3m2!1sen!2sin!4v1750958549948!5m2!1sen!2sin"
    
  ];
  useEffect(() => {
    const currentValue = search.get('current');
    setCurrent(currentValue);
  }, [search]);

  // Handle full-screen resize
  useEffect(() => {
    const handleResize = () => {
      setMarker(null); // Reset marker on screen resize
    };
   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const l= current===undefined ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773392.078304354!2d61.028322527582496!3d19.69057626482709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1751271117616!5m2!1sen!2sin" :link[current];
  return (
    <div className="relative flex flex-col w-screen h-screen z-0">
   {/*} <div
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
    > */}
    
      <Mapnavbar className="absolute z-2" />
      
  <Welcome className="absolute top-[1000px] left-0 w-full" />


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
          src={l}
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
