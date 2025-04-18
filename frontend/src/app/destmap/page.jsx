// page.js
"use client"
import dynamic from 'next/dynamic';

const Destmap = dynamic(() => import('@/components/Destmap'), {
  ssr: false,
});

export default function Page() {
  return <Destmap />;
}
