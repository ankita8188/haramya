'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { randomID } from './Zegoshared';
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import DraggableController from './Button';
import Mapnavbar from './Mapnavbar';
const AudienceRoom = () => {

const meetingRef = useRef(null);
const { id } = useParams();
const router = useRouter();

  const [shouldConnect, setShouldConnect] = useState(false);
  const [roomMismatch, setRoomMismatch] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [ws, setWs] = useState(null);
  const [isHostLive, setIsHostLive] = useState(false);

  const handleSendMessage = (msg) => {
    if (ws && isConnected) {
      ws.send(JSON.stringify({ type: 'control', command: msg, roomId: id }));
    }
  };

  const disconnectWebSocket = () => {
    if (ws) setWs(null);
    router.push('/');
  };

  const connectWebSocket = () => {
    const websocket = new WebSocket(`ws${process.env.NEXT_PUBLIC_API_URL}/ws`);
    websocket.onopen = () => {
      setIsConnected(true);
      setWs(websocket);
      websocket.send(JSON.stringify({
        type: 'join',
        role: 'audience',
        roomId: id,
      }));
    };

    websocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === 'live_status' && data.roomId===id) {
          setInterval(() => {
            const videoElement = document.querySelector('video');
            if (videoElement) {
              videoElement.classList.add('mirror-video');
            }
          }, 2000);

          if (!data.isLive && data.roomId===id) {
            console.log("data status")
            disconnectWebSocket();
            return;
          }

          if (data.roomId !== id ) {
            setShouldConnect(false);
            setRoomMismatch(true);
            return;
          }

          setRoomMismatch(false);
          setIsHostLive(true);
          setShouldConnect(true);
        }
      } catch (error) {
        console.error('WebSocket parsing error:', error);
      }
    };

    websocket.onclose = () => setIsConnected(false);
  };

  useEffect(() => {
    if (!id || !meetingRef.current) return;

    const appId = parseInt(process.env.NEXT_PUBLIC_API_ID);
    const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY;
    const userID = randomID();
    const userName = `Audience_${userID}`;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId, serverSecret, String(id), userID, userName
    );
 
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: meetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: { role: ZegoUIKitPrebuilt.Audience },
      },
    });

    connectWebSocket();
  }, [id]);

  return (
    <div style={{
      width: '100vw',
      height: '87vh',
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      position: 'relative',
    
    }}>
      
      <div ref={meetingRef} style={{position:'relative', width: '100%', height: '100%' }} />

      {roomMismatch && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.85)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          zIndex: 100
        }}>
          ❌ Room ID mismatch. Please check with host.
        </div>
      )}

      <div style={{
        textAlign: 'center',
        padding: '15px',
        backgroundColor: '#111',
        borderTop: '1px solid #444',
        boxShadow: '0 -2px 6px rgba(0,0,0,0.3)'
      }}>
       

<DraggableController/>
      </div>
    </div>
  );
};

export default AudienceRoom;
