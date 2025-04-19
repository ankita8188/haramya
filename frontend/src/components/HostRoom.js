'use client';

import { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { randomID } from './Zegoshared';

const HostRoom = () => {
  const meetingRef = useRef(null);
  const { id } = useParams();
  const router = useRouter();

  const [isHostLive, setIsHostLive] = useState(false);
  const [ws, setWs] = useState(null);
  const wsRef = useRef(null);
  const [isBackCamera, setIsBackCamera] = useState(true);
  const [zegoInstance, setZegoInstance] = useState(null);

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
  const connectWebSocket = (isLive= false) => {
    console.log(process.env.NEXT_PUBLIC_API_ID)
    const websocket = new WebSocket(`wss${process.env.NEXT_PUBLIC_API_URL}/ws`);
    websocket.onopen = () => {
      console.log('WebSocket connected');
      console.log(websocket)
      wsRef.current = websocket;
      console.log(isHostLive)
      if (isLive) {
        websocket.send(JSON.stringify({
          type: 'live_status',
          isLive: true,
          roomId: id
        }));
      }
    };
    websocket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('Received message:', data);

        if (data.type === 'system') {
          console.log('System message:', data.message);
        } else if (data.type === 'control') {
          speakMessage(data.command);
        } else if (data.type === 'live_status') {
          console.log('Live status received:', data.isLive);

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
    websocket.onclose = () => {
      console.log('WebSocket disconnected');
      wsRef.current = null;
    };
    setWs(websocket);
  };

  const disconnectWebSocket = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  };

  const toggleCamera = async () => {
    if (zegoInstance) {
      try {
        // Toggle camera facing mode
        const newFacingMode = isBackCamera ? 'user' : 'environment';
        await zegoInstance.toggleCamera(newFacingMode);
        setIsBackCamera(!isBackCamera);
        
        // Apply CSS transform to fix mirroring for back camera
        const videoElements = document.querySelectorAll('.zego-video-container video');
        videoElements.forEach(video => {
          if (newFacingMode === 'environment') {
            video.style.transform = 'scaleX(-1)'; // Flip horizontally for back camera
          } else {
            video.style.transform = 'scaleX(1)'; // Normal for front camera
          }
        });
      } catch (error) {
        console.error('Error toggling camera:', error);
      }
    }
  };


  useEffect(() => {
    if (!id || !meetingRef.current) return;
console.log( process.env.NEXT_PUBLIC_API_ID)
console.log(process.env.NEXT_PUBLIC_SECRET_KEY)
    const appId =parseInt(process.env.NEXT_PUBLIC_API_ID);
    const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY;
    const userID = randomID();
    const userName = `Host_${userID}`;

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId, serverSecret, String(id), userID, userName
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    setZegoInstance(zp);
    zp.joinRoom({
      container: meetingRef.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
           role: ZegoUIKitPrebuilt.Host,
           cameraConfig: {
            facingMode: 'environment',
            mirror: false
          }
           },
      },
      sharedLinks: [
        {
          name: 'Copy Audience Link',
          url: `https${process.env.NEXT_PUBLIC_FRONTEND_URL}/room/${id}`,
        },
      ],
      onLiveStart: () => {
        console.log("live started")
        setIsHostLive(true);
        console.log(isHostLive)
        connectWebSocket(true);

        setTimeout(() => {
          const videoElements = document.querySelectorAll('.zego-video-container video');
          videoElements.forEach(video => {
            video.style.transform = 'scaleX(-1)'; // Flip horizontally for back camera
          });
        }, 1000);
      },
      onLiveEnd: () => {
        console.log("live ended")
        setIsHostLive(false);
        console.log(ws+" "+WebSocket.OPEN)
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          wsRef.current.send(JSON.stringify({
            type: 'live_status',
            isLive: false,
            roomId: id,
          }));
        }
        disconnectWebSocket();
      },
    });
  }, [id]);

  return(
    <div className="relative">
    <div ref={meetingRef} style={{ width: '100vw', height: '100vh' }} />
    <button 
      onClick={toggleCamera}
      className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md z-50"
    >
      {isBackCamera ? 'Switch to Front Camera' : 'Switch to Back Camera'}
    </button>
  </div>
  );

};

export default HostRoom;
