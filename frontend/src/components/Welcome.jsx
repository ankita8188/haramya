'use client';
import { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const WelcomePopup = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const categoriesContainerRef = useRef(null);

  // Check device type and calculate scroll limits
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  // Update scroll limits and arrow visibility
  useEffect(() => {
    if (categoriesContainerRef.current) {
      const container = categoriesContainerRef.current;
      const maxScrollValue = container.scrollWidth - container.clientWidth;
      setMaxScroll(maxScrollValue);
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < maxScrollValue);
    }
  }, [scrollLeft, isMobile, isTablet]);

  // Handle scroll with arrow buttons
  const handleScroll = (direction) => {
    if (categoriesContainerRef.current) {
      const container = categoriesContainerRef.current;
      const scrollAmount = isMobile ? container.clientWidth * 0.8 : container.clientWidth * 0.5;
      const newScrollLeft = direction === 'left' 
        ? Math.max(0, scrollLeft - scrollAmount)
        : Math.min(maxScroll, scrollLeft + scrollAmount);
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      setScrollLeft(newScrollLeft);
    }
  };

  // Get column count based on screen size
  const getColumnCount = () => {
    if (isMobile) return 3;
    if (isTablet) return 4;
    return 6;
  };

  // Get card dimensions based on screen size
  const getCardDimensions = () => {
    if (isMobile) {
      return {
        width: '140px',
        height: '120px',
        iconSize: '35px',
        iconInnerSize: '20px',
        fontSize: '12px',
        padding: '10px 8px'
      };
    }
    if (isTablet) {
      return {
        width: '160px',
        height: '130px',
        iconSize: '40px',
        iconInnerSize: '24px',
        fontSize: '13px',
        padding: '12px 10px'
      };
    }
    return {
      width: '180px',
      height: '140px',
      iconSize: '45px',
      iconInnerSize: '28px',
      fontSize: '14px',
      padding: '14px 12px'
    };
  };

  // Get container height based on screen size
  const getContainerHeight = () => {
    if (isMobile) return '280px';
    if (isTablet) return '320px';
    return '360px';
  };

  const steps = [
    {
      title: "Welcome",
      content: "This map contains interactive features. Click on the map to place a marker at any location.",
      img: "/Welcome.jfif"
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

  // Category data
  const categories = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      name: "Sports & Recreation",
      color: "#4CAF50"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/709/709790.png",
      name: "Transports",
      color: "#2196F3"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
      name: "Shopping",
      color: "#FF9800"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/942/942751.png",
      name: "Rooftop",
      color: "#9C27B0"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      name: "Aerial",
      color: "#00BCD4"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
      name: "General",
      color: "#607D8B"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/189/189668.png",
      name: "Culture & Museum",
      color: "#F44336"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828675.png",
      name: "Hotel",
      color: "#795548"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      name: "Restaurants",
      color: "#E91E63"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/709/709790.png",
      name: "Entertainment",
      color: "#673AB7"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1170/1170576.png",
      name: "Parks",
      color: "#009688"
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/942/942751.png",
      name: "Landmarks",
      color: "#FFC107"
    }
  ];

  return showWelcome && (
    <div style={{
      position: 'absolute',
      top: isMobile ? '10px' : '20px',
      left: isMobile ? '10px' : '20px',
      width: isMobile ? 'calc(100% - 20px)' : isTablet ? '80%' : '60%',
      maxWidth: '800px',
      height: isMobile ? 'auto' : 'auto',
      maxHeight: isMobile ? '90vh' : '85vh',
      padding: isMobile ? '15px' : '25px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      color: 'black',
      transition: 'all 0.3s ease-in-out',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: isMobile ? '10px' : '15px'
      }}>
        <h2 style={{ 
          margin: 0, 
          fontSize: isMobile ? '20px' : isTablet ? '24px' : '28px', 
          fontWeight: 'bold', 
          color: '#B0006D',
          lineHeight: '1.2'
        }}>
          {steps[stepIndex].title}
        </h2>
        <button 
          onClick={() => setShowWelcome(false)} 
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: isMobile ? '24px' : '28px',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: '5px 10px',
            color: '#666',
            transition: 'color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '30px' : '35px',
            height: isMobile ? '30px' : '35px',
            borderRadius: '50%',
            ':hover': {
              backgroundColor: 'rgba(0,0,0,0.05)'
            }
          }}
        >
          ×
        </button>
      </div>

      {/* Content Area with Transition */}  
      <div
        style={{
          display: 'flex',
          flex: 1,
          marginTop: isMobile ? '10px' : '15px',
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateX(0px)' : 'translateX(20px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          overflow: 'hidden',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '15px' : '20px'
        }}
      >
        {/* Text */}
        <div style={{ 
          flex: 1, 
          paddingRight: isMobile ? '0' : '15px', 
          fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px', 
          lineHeight: '1.6',
          overflowY: 'auto',
          maxHeight: isMobile ? 'none' : 'calc(85vh - 100px)',
          '::-webkit-scrollbar': {
            width: '6px'
          },
          '::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '3px'
          },
          '::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '3px'
          }
        }}>
          {stepIndex === 0 && (
            <p style={{
              margin: '0 0 15px 0',
              fontSize: isMobile ? '14px' : isTablet ? '15px' : '16px',
              lineHeight: '1.6',
              color: '#444'
            }}>
              Harmya contains realtime 170 degree videos.
Rotate, Zoom and Control the movements of the localite using the controls on the bottom, mouse, touch screen or VR controller.<br/>
Use the available green hostspots to navigate city and start your realtime tour to that place, and continue your exploration journey across the different esatics of city.
You can also navigate the city in birds eye mode and enjoy the city from top(this top view is not realtime).
            </p>
          )}

          {stepIndex === 1 && (
            <div style={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row', 
              gap: isMobile ? '15px' : '20px', 
              marginTop: isMobile ? '10px' : '15px'
            }}>
              
              {/* Left Column */}
              <ul style={{ 
                flex: 1, 
                listStyle: 'none', 
                padding: 0,
                margin: 0
              }}>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '12px',
                  fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px'
                }}>
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/535/535239.png" 
                    alt="Explore" 
                    style={{ 
                      width: isMobile ? '18px' : '20px', 
                      marginRight: '10px',
                      flexShrink: 0
                    }} 
                  />
                  <span>Explore nearby and related locations/points</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '12px',
                  fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px'
                }}>
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/565/565547.png" 
                    alt="Tour Mode" 
                    style={{ 
                      width: isMobile ? '18px' : '20px', 
                      marginRight: '10px',
                      flexShrink: 0
                    }} 
                  />
                  <span>Enable automatic tour mode</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px'
                }}>
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/565/565655.png" 
                    alt="View Projection" 
                    style={{ 
                      width: isMobile ? '18px' : '20px', 
                      marginRight: '10px',
                      flexShrink: 0
                    }} 
                  />
                  <span>Change view projection</span>
                </li>
              </ul>

              {/* Right Column */}
              <ul style={{ 
                flex: 1, 
                listStyle: 'none', 
                padding: 0,
                margin: 0
              }}>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '12px',
                  fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px'
                }}>
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png" 
                    alt="Description" 
                    style={{ 
                      width: isMobile ? '18px' : '20px', 
                      marginRight: '10px',
                      flexShrink: 0
                    }} 
                  />
                  <span>Show a description of the current location/point</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '12px',
                  fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px'
                }}>
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" 
                    alt="View Quality" 
                    style={{ 
                      width: isMobile ? '18px' : '20px', 
                      marginRight: '10px',
                      flexShrink: 0
                    }} 
                  />
                  <span>Change view quality</span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  fontSize: isMobile ? '13px' : isTablet ? '14px' : '15px'
                }}>
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828930.png" 
                    alt="Feedback" 
                    style={{ 
                      width: isMobile ? '18px' : '20px', 
                      marginRight: '10px',
                      flexShrink: 0
                    }} 
                  />
                  <span>Give us your feedback</span>
                </li>
              </ul>
            </div>
          )}

          {stepIndex === 2 && (
            <div style={{
              height: getContainerHeight(),
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div
                ref={categoriesContainerRef}
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${getColumnCount()}, 1fr)`,
                  gridTemplateRows: 'repeat(2, 1fr)',
                  gap: '15px',
                  padding: '10px',
                  height: '100%',
                  overflowX: 'auto',
                  scrollBehavior: 'smooth',
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none'
                }}
              >
                {categories.map((category, index) => {
                  const dimensions = getCardDimensions();
                  return (
                    <div
                      key={index}
                      style={{
                        width: dimensions.width,
                        height: dimensions.height,
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        padding: dimensions.padding,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: `2px solid ${category.color}`,
                        flexShrink: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                      }}
                    >
                      <div
                        style={{
                          width: dimensions.iconSize,
                          height: dimensions.iconSize,
                          backgroundColor: category.color,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px'
                        }}
                      >
                        <img
                          src={category.icon}
                          alt={category.name}
                          style={{
                            width: dimensions.iconInnerSize,
                            height: dimensions.iconInnerSize,
                            filter: 'brightness(0) invert(1)'
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontSize: dimensions.fontSize,
                          fontWeight: '500',
                          textAlign: 'center',
                          color: '#333'
                        }}
                      >
                        {category.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              {showLeftArrow && (
                <button
                  onClick={() => handleScroll('left')}
                  style={{
                    position: 'absolute',
                    left: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 1
                  }}
                >
                  <FaArrowLeft size={16} color="#666" />
                </button>
              )}
              {showRightArrow && (
                <button
                  onClick={() => handleScroll('right')}
                  style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 1
                  }}
                >
                  <FaArrowRight size={16} color="#666" />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Image Section */}
        {stepIndex === 0 && (
          <div style={{ 
            flex: isMobile ? '0 0 auto' : '0 0 150px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            marginTop: isMobile ? '15px' : '0',
            padding: isMobile ? '0 10px' : '0'
          }}>
            <img
              src='welcome.jfif'
              alt="Step illustration"
              style={{ 
                width: '100%', 
                height: 'auto',
                maxHeight: isMobile ? '120px' : '150px',
                objectFit: 'contain'
              }}
            />
          </div>
        )}
      </div>

      {/* Navigation Dots */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: isMobile ? '15px' : '20px',
        marginBottom: isMobile ? '5px' : '0',
        gap: isMobile ? '8px' : '12px'
      }}>
        {steps.map((_, idx) => (
          <div
            key={idx}
            onClick={() => handleDotClick(idx)}
            style={{
              width: isMobile ? 18 : 22,
              height: isMobile ? 18 : 22,
              borderRadius: '50%',
              backgroundColor: stepIndex === idx ? '#B0006D' : '#ccc',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '11px' : '13px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: stepIndex === idx ? '0 2px 4px rgba(176,0,109,0.3)' : 'none',
              transform: stepIndex === idx ? 'scale(1.1)' : 'scale(1)'
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