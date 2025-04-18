'use client';
import { useEffect, useState } from 'react';

const CookiePopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  const handleClose = () => {
    setShow(false);
  };

  return show && (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '10px 10px',
      borderRadius: '12px',
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
      zIndex: 9999,
      maxWidth: '600px',
      width: '90%',
      color: '#000',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      {/* Close Button */}
      <button onClick={handleClose} style={{
        position: 'absolute',
        top: '10px',
        right: '15px',
        fontSize: '20px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
      }}>×</button>

      {/* Message */}
      <p style={{ margin: 0, fontSize: '16px' }}>
        This site uses cookies to understand how you use our website and to improve your experience.
        By continuing to use our website, you accept our use of cookies.
      </p>

      {/* Accept Button */}
      <button onClick={handleAccept} style={{
        alignSelf: 'flex-end',
        backgroundColor: '#B0006D',
        color: 'white',
        border: 'none',
        padding: '5px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '300',
      }}>
        ACCEPT
      </button>
    </div>
  );
};

export default CookiePopup;
