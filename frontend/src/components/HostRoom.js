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

  const connectWebSocket = (isLive = false) => {
    const websocket = new WebSocket(`wss${process.env.NEXT_PUBLIC_API_URL}/ws`);
    websocket.onopen = () => {
      console.log('WebSocket connected');
      wsRef.current = websocket;
      if (isLive) {
        websocket.send(
          JSON.stringify({
            type: 'live_status',
            isLive: true,
            roomId: id,
          })
        );
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
          if (data.roomId !== id) {
            console.warn('Room ID mismatch. Host is live in another room.');
            return;
          }

          setIsHostLive(data.isLive);
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

  useEffect(() => {
    if (!id || !meetingRef.current) return;

    const appId = parseInt(process.env.NEXT_PUBLIC_API_ID);
    const serverSecret = process.env.NEXT_PUBLIC_SECRET_KEY;
    const userID = randomID();
    const userName = `Host_${userID}`;

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
      useFrontFacingCamera: false, // Use back camera
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: { role: ZegoUIKitPrebuilt.Host },
      },
      onLiveStart: () => {
        console.log('Live started');
        setIsHostLive(true);
        connectWebSocket(true);
      },
      onLiveEnd: () => {
        console.log('Live ended');
        setIsHostLive(false);
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          wsRef.current.send(
            JSON.stringify({
              type: 'live_status',
              isLive: false,
              roomId: id,
            })
          );
        }
        disconnectWebSocket();
      },
    });

    // Set video mirror mode to prevent local preview mirror (only affect the published stream)
    zp.setVideoMirrorMode(ZegoUIKitPrebuilt.ZegoVideoMirrorMode.ZegoVideoMirrorModeNoMirror);

  }, [id]);

  return <div ref={meetingRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default HostRoom;
