'use client';
import Navbar from '@/components/navBar';
import '../globals.css';
import '../../../styles/reactImageZoom.css';

import React, { useEffect, useState } from 'react';
import useStore from '@/src/store/useStore';
import { useRouter } from 'next/navigation';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false);
  const { currentPage } = useStore.getState();
  const router = useRouter();


  useEffect(() => {
    setIsClient(true);
    const currentPath = window?.location?.pathname;
    if (currentPath !== currentPage) {
      console.log(`El path actual (${currentPath}) es diferente al currentPage (${currentPage})`);
      router.push(currentPage);
    }
  }, []);

  return (
    <html lang="en" className="dark">
      <head>
        <title>El Guardian y la profecia del Lobo</title>
        <meta name="description" content={'Un libro de rol donde el lector es el protagonista de la historia'} />
        <link rel="icon" href="/lobo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className='pergamino-theme h-full'>
        {isClient && (<>
          <header className='w-full h-12 bg-navbar'>
            <Navbar />
          </header>

          <main className='flex flex-col items-center w-full'>
            {children}
          </main>
          <footer className='w-full fixed bottom-0 h-12 bg-footer'>
            <div className="w-full h-12 flex items-center justify-center">
              <p className="text-center text-red-950 font-normal text-xs">© 2025 El Guardian y la profecia del Lobo</p>
            </div>
          </footer>
        </>)}
      </body>
    </html>
  );
}