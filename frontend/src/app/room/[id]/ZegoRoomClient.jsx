'use client';

import { useEffect, useRef, useState } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Mapnavbar from '@/components/Mapnavbar';
const ZegoRoomClient = ({ id, role }) => {
  const meetingRef = useRef(null);
  const hasJoinedRef = useRef(false);
  const [zegoInstance, setZegoInstance] = useState(null);
  const [ws, setWs] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const reconnectTimeoutRef = useRef(null);

  const randomID = (len = 5) => {
    const chars =
      '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP';
    let result = '';
    for (let i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const speakMessage = (message) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(message);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = async (message) => {
    try {
      if (!ws || !isConnected) {
        console.error("WebSocket not connected");
        return;
      }

      ws.send(JSON.stringify({
        type: 'control',
        command: message
      }));
      
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const connectWebSocket = () => {
    try {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
        reconnectTimeoutRef.current = null;
      }

      if (ws) {
        ws.close();
      }

      const websocket = new WebSocket('ws://localhost:8080/ws');
      
      websocket.onopen = () => {
        console.log('WebSocket connected');
        setWs(websocket);
        setIsConnected(true);
      };

      websocket.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('Received message:', data);
          
          if (data.type === 'system') {
            console.log('System message:', data.message);
          } else if (data.type === 'control' && role === ZegoUIKitPrebuilt.Host) {
            speakMessage(data.command);
          }
        } catch (error) {
          console.error('Error parsing message:', error);
        }
      };

      websocket.onerror = (error) => {
        console.error('WebSocket error:', error);
        setIsConnected(false);
      };

      websocket.onclose = (event) => {
        console.log('WebSocket disconnected:', event.code, event.reason);
        setWs(null);
        setIsConnected(false);
        reconnectTimeoutRef.current = setTimeout(connectWebSocket, 5000);
      };
    } catch (error) {
      console.error('Error creating WebSocket:', error);
      setIsConnected(false);
      reconnectTimeoutRef.current = setTimeout(connectWebSocket, 5000);
    }
  };

  useEffect(() => {
    let mounted = true;
    
    const setupWebSocket = () => {
      if (mounted) {
        connectWebSocket();
      }
    };

    setupWebSocket();

    return () => {
      mounted = false;
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
      if (ws) {
        ws.close();
      }
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [role]);

  useEffect(() => {
    if (!id || !meetingRef.current || hasJoinedRef.current) return;
  
    hasJoinedRef.current = true;
  
    const appId = 582616356;
    const serverSecret = 'fdd4f736ae9f1c763e03b15dae0396e5';
  
    const userID = randomID();
    const userName = `User_${userID}`;
    
  
    try {
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        String(id),
        userID,
        userName
      );
  
      const zp = ZegoUIKitPrebuilt.create(kitToken);
  
      zp.joinRoom({
        container: meetingRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: { role },
        },
        sharedLinks: [
          {
            name: 'Copy Link (Audience)',
            url: `http://localhost:3000/room/${id}?role=audience`,
          },
        ],
      });
  
      setZegoInstance(zp);
    } catch (error) {
      console.error('Error initializing Zego:', error);
    }
  }, [id, role]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      
      <div ref={meetingRef} style={{ width: '100%', height: '90%' }} />
      {role === ZegoUIKitPrebuilt.Audience && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '10px',
            padding: '10px',
          }}
        >
          
          <div style={{ 
            color: isConnected ? '#4CAF50' : '#f44336',
            marginBottom: '10px'
          }}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={() => handleSendMessage('Left')}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                opacity: isConnected ? 1 : 0.5
              }}
              disabled={!isConnected}
            >
              Left
            </button>
            <button 
              onClick={() => handleSendMessage('Up')}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                opacity: isConnected ? 1 : 0.5
              }}
              disabled={!isConnected}
            >
              Up
            </button>
            <button 
              onClick={() => handleSendMessage('Down')}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                opacity: isConnected ? 1 : 0.5
              }}
              disabled={!isConnected}
            >
              Down
            </button>
            <button 
              onClick={() => handleSendMessage('Right')}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                opacity: isConnected ? 1 : 0.5
              }}
              disabled={!isConnected}
            >
              Right
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ZegoRoomClient; 