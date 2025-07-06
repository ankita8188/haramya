'use client';

import dynamic from 'next/dynamic';
import Mapnavbar from '@/components/Mapnavbar';
const AudienceRoom = dynamic(() => import('@/components/AudienceRoom'), {
  ssr: false,
});

export default function Page() {
  return <div>
    <Mapnavbar/>
    <AudienceRoom />
    </div>;
}
