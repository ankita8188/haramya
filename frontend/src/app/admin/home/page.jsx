'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [id, setid] = useState('');
  const router = useRouter();

  const handleJoin = () => {
    if (id.trim()) {
      router.push(`/admin/room/${id}?role=host`);
    } else {
      alert('Please enter a room ID');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={id}
        onChange={(e) => setid(e.target.value)}
        style={{ marginRight: 10, padding: 8 }}
      />
      <button onClick={handleJoin} style={{ padding: '8px 12px' }}>
        Join as Host
      </button>
    </div>
  );
};

export default Home;