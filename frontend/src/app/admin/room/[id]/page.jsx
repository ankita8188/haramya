'use client';

import dynamic from 'next/dynamic';

const HostRoom = dynamic(() => import('@/components/HostRoom'), { ssr: false });

export default HostRoom;
