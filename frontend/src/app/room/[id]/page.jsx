'use client';

import dynamic from 'next/dynamic';

const AudienceRoom = dynamic(() => import('@/components/AudienceRoom'), {
  ssr: false,
});

export default function Page() {
  return <AudienceRoom />;
}
