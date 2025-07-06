import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowUp, ArrowLeft, ArrowRight, ArrowDown, Settings, X } from 'lucide-react';

export default function DraggableController() {
  const controllerRef = useRef(null);
  const settingsPanelRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [showSettings, setShowSettings] = useState(false);
  const [settingsPanelPosition, setSettingsPanelPosition] = useState({ x: 0, y: 0 });
  const [settings, setSettings] = useState({
    size: 120,
    bgColor: '#666666',
    buttonColor: '#333333',
    buttonSize: 30,
    ttsEnabled: true,
    opacity: 0.8
  });

  // Initialize speech synthesis
  const [ttsSupported, setTtsSupported] = useState(false);

  useEffect(() => {
    setTtsSupported('speechSynthesis' in window);
    if ('speechSynthesis' in window) {
      // Preload voices
      window.speechSynthesis.getVoices();
    }
  }, []);

  // Handle dragging with useCallback to prevent recreating functions
  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;
    
    setPosition({
      x: Math.max(0, Math.min(window.innerWidth - settings.size, newX)),
      y: Math.max(0, Math.min(window.innerHeight - settings.size, newY)),
    });
  }, [isDragging, offset, settings.size]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Close settings when clicking outside - improved logic
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showSettings && 
          controllerRef.current && 
          !controllerRef.current.contains(e.target) && 
          settingsPanelRef.current && 
          !settingsPanelRef.current.contains(e.target)) {
        setShowSettings(false);
      }
    };

    if (showSettings) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showSettings]);

  const handleMouseDown = useCallback((e) => {
    // Only start dragging if clicking on the controller background or draggable elements
    if (e.target === controllerRef.current || 
        e.target.closest('[data-draggable="true"]') || 
        e.target.closest('.controller-background')) {
      e.preventDefault();
      const rect = controllerRef.current.getBoundingClientRect();
      setOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  }, []);

  const handleButtonClick = useCallback((direction) => {
    console.log(`Direction pressed: ${direction}`);
    
    if (settings.ttsEnabled && ttsSupported) {
      speakDirection(direction);
    }
  }, [settings.ttsEnabled, ttsSupported]);

  const speakDirection = useCallback((direction) => {
    if (!ttsSupported) return;
    
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance();
    speech.text = getSpeechText(direction);
    speech.volume = 1;
    speech.rate = 0.8;
    speech.pitch = 1;
    
    // Wait for voices to be loaded if needed
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      speech.voice = voices[0];
      window.speechSynthesis.speak(speech);
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        const newVoices = window.speechSynthesis.getVoices();
        if (newVoices.length > 0) {
          speech.voice = newVoices[0];
          window.speechSynthesis.speak(speech);
        }
      };
    }
  }, [ttsSupported]);

  const getSpeechText = (direction) => {
    switch(direction) {
      case 'Up': return 'Moving forward';
      case 'Down': return 'Moving backward';
      case 'Left': return 'Turning left';
      case 'Right': return 'Turning right';
      default: return '';
    }
  };

  const handleSettingChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : (type === 'number' ? parseInt(value) : value);
    
    setSettings(prev => ({
      ...prev,
      [name]: newValue
    }));
  }, []);

  const toggleSettings = useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
    
    if (!showSettings) {
      // Calculate and fix the position when opening settings
      const panelX = Math.min(window.innerWidth - 250, position.x + settings.size + 10);
      const panelY = Math.min(window.innerHeight - 400, position.y);
      setSettingsPanelPosition({ x: panelX, y: panelY });
    }
    
    setShowSettings(!showSettings);
  }, [showSettings, position, settings.size]);

  // Calculate responsive sizes
  const settingsBtnSize = Math.max(20, Math.min(40, settings.size * 0.15));
  const settingsBtnFontSize = Math.max(10, settingsBtnSize * 0.6);

  // Memoize button styles to prevent recreation
  const getButtonStyle = useCallback((pos, val, align, isSide = false) => {
    const btnSize = Math.max(20, Math.min(50, settings.buttonSize));
    return {
      position: 'absolute',
      [pos]: val,
      [isSide ? 'top' : 'left']: align,
      transform: isSide ? 'translateY(-50%)' : 'translateX(-50%)',
      backgroundColor: settings.buttonColor,
      border: 'none',
      borderRadius: '50%',
      color: '#fff',
      width: `${btnSize}px`,
      height: `${btnSize}px`,
      fontSize: `${Math.max(12, btnSize * 0.4)}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      opacity: 1,
      outline: 'none',
      zIndex: 102,
    };
  }, [settings.buttonSize, settings.buttonColor]);

  return (
    <>
      <div
        ref={controllerRef}
        onMouseDown={handleMouseDown}
        className="controller-background"
        style={{
          position: 'fixed',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${settings.size}px`,
          height: `${settings.size}px`,
          border: '2px solid #fff',
          borderRadius: '50%',
          backgroundColor: settings.bgColor,
          opacity: settings.opacity,
          zIndex: 100,
          cursor: isDragging ? 'grabbing' : 'grab',
          transition: isDragging ? 'none' : 'all 0.3s ease',
          userSelect: 'none',
        }}
      >
        {/* Settings button */}
        <button
          data-draggable="true"
          onClick={toggleSettings}
          style={{
            position: 'absolute',
            top: `${Math.max(5, settings.size * 0.05)}px`,
            right: `${Math.max(5, settings.size * 0.05)}px`,
            backgroundColor: settings.buttonColor,
            border: 'none',
            borderRadius: '50%',
            color: '#fff',
            width: `${settingsBtnSize}px`,
            height: `${settingsBtnSize}px`,
            fontSize: `${settingsBtnFontSize}px`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            zIndex: 103,
            transition: 'all 0.2s ease',
            outline: 'none',
          }}
        >
          {showSettings ? <X size={settingsBtnFontSize} /> : <Settings size={settingsBtnFontSize} />}
        </button>

        {/* Direction buttons */}
        <button 
          onClick={() => handleButtonClick('Up')} 
          style={getButtonStyle('top', '10px', '50%', false)}
        >
          <ArrowUp size={Math.max(12, settings.buttonSize * 0.4)} />
        </button>
        <button 
          onClick={() => handleButtonClick('Left')} 
          style={getButtonStyle('left', '10px', '50%', true)}
        >
          <ArrowLeft size={Math.max(12, settings.buttonSize * 0.4)} />
        </button>
        <button 
          onClick={() => handleButtonClick('Right')} 
          style={getButtonStyle('right', '10px', '50%', true)}
        >
          <ArrowRight size={Math.max(12, settings.buttonSize * 0.4)} />
        </button>
        <button 
          onClick={() => handleButtonClick('Down')} 
          style={getButtonStyle('bottom', '10px', '50%', false)}
        >
          <ArrowDown size={Math.max(12, settings.buttonSize * 0.4)} />
        </button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div 
          ref={settingsPanelRef}
          style={{
            position: 'fixed',
            left: `${settingsPanelPosition.x}px`,
            top: `${settingsPanelPosition.y}px`,
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            zIndex: 104,
            width: '220px',
            maxHeight: '400px',
            overflowY: 'auto',
            border: '1px solid #e0e0e0',
          }}
        >
          <h3 style={{ 
            marginTop: 0, 
            marginBottom: '20px', 
            color: '#333',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Controller Settings
          </h3>
          
          <SettingControl 
            label={`Size: ${settings.size}px`}
            type="range"
            name="size"
            min="80"
            max="200"
            value={settings.size}
            onChange={handleSettingChange}
          />
          
          <SettingControl 
            label={`Opacity: ${Math.round(settings.opacity * 100)}%`}
            type="range"
            name="opacity"
            min="0.1"
            max="1"
            step="0.1"
            value={settings.opacity}
            onChange={handleSettingChange}
          />
          
          <SettingControl 
            label="Background Color"
            type="color"
            name="bgColor"
            value={settings.bgColor}
            onChange={handleSettingChange}
          />
          
          <SettingControl 
            label="Button Color"
            type="color"
            name="buttonColor"
            value={settings.buttonColor}
            onChange={handleSettingChange}
          />
          
          <SettingControl 
            label={`Button Size: ${settings.buttonSize}px`}
            type="range"
            name="buttonSize"
            min="20"
            max="50"
            value={settings.buttonSize}
            onChange={handleSettingChange}
          />
          
          <div style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #e0e0e0' }}>
            <SettingControl 
              label="Enable Voice Feedback"
              type="checkbox"
              name="ttsEnabled"
              checked={settings.ttsEnabled}
              onChange={handleSettingChange}
              disabled={!ttsSupported}
            />
            {!ttsSupported && (
              <p style={{ 
                fontSize: '12px', 
                color: '#e74c3c', 
                marginTop: '8px',
                fontStyle: 'italic'
              }}>
                Text-to-speech not supported in your browser
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// Reusable setting control component
function SettingControl({ label, type, disabled, ...props }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ 
        display: 'block', 
        marginBottom: type === 'checkbox' ? '0' : '8px',
        fontSize: '14px',
        color: '#555',
        fontWeight: type === 'checkbox' ? 'normal' : '600',
        opacity: disabled ? 0.6 : 1
      }}>
        {type === 'checkbox' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input 
              type={type} 
              style={{ 
                width: '16px', 
                height: '16px',
                cursor: disabled ? 'not-allowed' : 'pointer'
              }} 
              disabled={disabled}
              {...props} 
            />
            <span>{label}</span>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: '5px' }}>{label}</div>
            <input 
              type={type} 
              style={{ 
                width: '100%', 
                height: type === 'color' ? '35px' : '8px',
                borderRadius: type === 'color' ? '6px' : '4px',
                border: type === 'color' ? '1px solid #ddd' : 'none',
                outline: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.6 : 1,
                backgroundColor: type === 'range' ? '#f0f0f0' : 'transparent'
              }} 
              disabled={disabled}
              {...props} 
            />
          </>
        )}
      </label>
    </div>
  );
}