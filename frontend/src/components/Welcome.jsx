'use client';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const WelcomePopup = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const steps = [
    {
      title: "Welcome",
      content: "This map contains interactive features. Click on the map to place a marker at any location.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Computer_mouse_scroll_wheel.svg/120px-Computer_mouse_scroll_wheel.svg.png"
    },
    {
      title: "Controls",
      content: (
        <ul style={{ paddingLeft: '18px', lineHeight: '1.8' }}>
          <li>Explore nearby and related locations/points</li>
          <li>Enable automatic tour mode</li>
          <li>Change view projection</li>
          <li>Show a description of the current location/point</li>
          <li>Change view quality</li>
          <li>Give us your feedback</li>
        </ul>
      ),
      img: null // Optional: You can add a relevant icon if you want
    },
    {
      title: "Categories",
      content: "You can explore the city in different modes and gain insights easily by clicking anywhere.",
      img: "https://cdn-icons-png.flaticon.com/512/595/595684.png"
    }
  ];

  // Transition logic: fade out → change → fade in
  const handleDotClick = (index) => {
    if (index === stepIndex) return;
    setFade(false); // start fade out
    setTimeout(() => {
      setStepIndex(index); // change content
      setFade(true); // fade in
    }, 300); // match fade duration
  };
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeArrow, setActiveArrow] = useState(null); // Track active arrow

  const handleScroll = (direction) => {
    const scrollAmount = 500; // Adjust scroll distance as per your need
    setScrollLeft((prev) => prev + direction * scrollAmount);
  };

  const handleArrowClick = (direction) => {
    setActiveArrow(direction); // Set active arrow on click
    handleScroll(direction); // Trigger scroll on arrow click
  };

  return showWelcome && (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      width: '45vw',
      height: '55vh',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      color: 'black',
      transition: 'all 0.3s ease-in-out'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, fontSize:'30px', fontWeight:'bold', color:'#B0006D' }}>{steps[stepIndex].title}</h2>
        <button onClick={() => setShowWelcome(false)} style={{
          border: 'none',
          background: 'transparent',
          fontSize: '20px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>×</button>
      </div>

      {/* Content Area with Transition */}
    {/* Content Area with Transition */}  
<div
  style={{
    display: 'flex',
    flex: 1,
    marginTop: '15px',
    opacity: fade ? 1 : 0,
    transform: fade ? 'translateX(0px)' : 'translateX(20px)',
    transition: 'opacity 0.3s ease, transform 0.3s ease'
  }}
>
  {/* Text */}
  <div style={{ flex: 1, paddingRight: '15px', fontSize: '15px', lineHeight: '1.6' }}>
    {stepIndex === 0 && (
      <p>This map contains interactive features. Click on the map to place a marker at any location.</p>
    )}

{stepIndex === 1 && (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop:'40px' }}>
    
    {/* Left Column */}
    <ul style={{ flex: 1, listStyle: 'none', padding: 0 }}>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="Explore" style={{ width: '20px', marginRight: '10px' }} />
        Explore nearby and related locations/points
      </li>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="Tour Mode" style={{ width: '20px', marginRight: '10px' }} />
        Enable automatic tour mode
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/565/565655.png" alt="View Projection" style={{ width: '20px', marginRight: '10px' }} />
        Change view projection
      </li>
    </ul>

    {/* Right Column */}
    <ul style={{ flex: 1, listStyle: 'none', padding: 0 }}>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" alt="Description" style={{ width: '20px', marginRight: '10px' }} />
        Show a description of the current location/point
      </li>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" alt="View Quality" style={{ width: '20px', marginRight: '10px' }} />
        Change view quality
      </li>
      <li style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://cdn-icons-png.flaticon.com/512/1828/1828930.png" alt="Feedback" style={{ width: '20px', marginRight: '10px' }} />
        Give us your feedback
      </li>
    </ul>
  </div>
)}

{stepIndex === 2 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
          {/* Left Arrow Button */}
          <button
            onClick={() => handleArrowClick(-1)}
            style={{
              alignSelf: 'center',
              background: 'transparent', // No background color
              border: '2px solid #000', // Circular border
              fontSize: '24px',
              color: '#000',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
            }}
          >
              <FaArrowLeft size={24} color="#000" />
          </button>

          {/* Left Column */}
          <ul
            style={{
              flex: 1,
              listStyle: 'none',
              padding: 0,
              overflowX: 'hidden',
              whiteSpace: 'nowrap',
              transform: `translateX(${scrollLeft}px)`,
              transition: 'transform 0.5s ease', // Smooth sliding
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Sports"
                style={{ width: '24px', marginRight: '10px' }}
              />
              Sports & Recreation
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/709/709790.png"
                alt="Transport"
                style={{ width: '24px', marginRight: '10px' }}
              />
              Transports
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="Shopping"
                style={{ width: '24px', marginRight: '10px' }}
              />
              Shopping
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942751.png"
                alt="Rooftop"
                style={{ width: '24px', marginRight: '10px' }}
              />
              Rooftop
            </li>
          </ul>

          {/* Right Column */}
          <ul
            style={{
              flex: 1,
              listStyle: 'none',
              padding: 0,
              overflowX: 'hidden',
              whiteSpace: 'nowrap',
              transform: `translateX(${scrollLeft}px)`,
              transition: 'transform 0.5s ease', // Smooth sliding
            }}
          >
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Aerial"
                style={{ width: '24px', marginRight: '10px' }}
              />
              Aerial
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                alt="General"
                style={{ width: '24px', marginRight: '10px' }}
              />
              General
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/189/189668.png"
                alt="Culture"
                style={{ width: '24px', marginRight: '10px' }}
              />
              Culture & Museum
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828675.png"
                alt="Hotel"
                style={{ width: '24px', marginRight: '10px' }}
              />
              Hotel
            </li>
          </ul>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleArrowClick(1)}
            style={{
              alignSelf: 'center',
              background: 'transparent', // No background color
              border: '2px solid #000', // Circular border
              fontSize: '24px',
              color: '#000',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
            }}
          >
             <FaArrowRight size={24} color="#000" />
          </button>
        </div>
      )}
  </div>

  {/* Image Section */}
  {stepIndex === 0 && (
    <div style={{ flex: '0 0 150px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={steps[stepIndex].img}
        alt="Step illustration"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )}
</div>


      {/* Navigation Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
        {steps.map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleDotClick(idx)}
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              backgroundColor: stepIndex === idx ? '#B0006D' : '#ccc',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 'bold',
              margin: '0 6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePopup;
