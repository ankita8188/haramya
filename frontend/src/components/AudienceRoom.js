'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { randomID } from './Zegoshared';

const AudienceRoom = () => {
  const meetingRef = useRef(null);
  const { id } = useParams();

  const [shouldConnect, setShouldConnect] = useState(false);
  const [roomMismatch, setRoomMismatch] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [ws, setWs] = useState(null);

  const router = useRouter();

  const handleSendMessage = (msg) => {
    if (ws && isConnected) {
      ws.send(JSON.stringify({
        type: 'control',
        command: msg
      }));
    }
  };

  const disconnectWebSocket = () => {
    if (ws) {
      setWs(null)

    }
    router.push("/")
  };

  const connectWebSocket = () => {
    const websocket = new WebSocket(`ws://${NEXT_PUBLIC_API_URL}/ws`);
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
        console.log('Received message:', data);

        if (data.type === 'system') {
          console.log('System message:', data.message);
        }  else if (data.type === 'live_status') {
          console.log('Live status received:', data.isLive);
          if(!data.isLive){
            console.log("ended")
            disconnectWebSocket()
        
            return;
          }
          if (data.roomId !== id) {
            console.warn('Room ID mismatch. Host is live in another room.');
              setShouldConnect(false);
              setShowWaitingMessage(true);
              setRoomMismatch(true);
            
            return;
          }

          setRoomMismatch(false);
          setIsHostLive(data.isLive);

            setShouldConnect(data.isLive);
            setShowWaitingMessage(!data.isLive);
          
        }
      } catch (error) {
        console.error('Error parsing message:', error);
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
    connectWebSocket()

  }, [id]);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <div ref={meetingRef} style={{ width: '100%', height: '90%' }} />
      
      {roomMismatch && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.85)',
          color: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '24px'
        }}>
          Room ID mismatch. Please check with host.
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <div style={{ color: isConnected ? 'green' : 'red' }}>
          {isConnected ? 'Connected' : 'Disconnected'}
        </div>
        <div style={{ marginTop: '10px' }}>
          {['Left', 'Up', 'Down', 'Right'].map(dir => (
            <button
              key={dir}
              onClick={() => handleSendMessage(dir)}
              disabled={!isConnected}
              style={{
                margin: '5px',
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              {dir}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudienceRoom;
