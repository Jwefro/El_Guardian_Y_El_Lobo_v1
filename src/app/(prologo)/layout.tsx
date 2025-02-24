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
  const { currentPage } = useStore.getState();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    if (currentPath && currentPath !== currentPage) {
      console.log(`El path actual (${currentPath}) es diferente al currentPage (${currentPage})`);
      router.push(currentPage);
    }

    const handlePopState = () => {
      router.push(currentPage);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handlePopState);
      }
    };
  }, [currentPath, currentPage, router]);

  return (
    <html lang="en" className="dark">
      <head>
        <title>El Guardian y la profecia del Lobo</title>
        <meta name="description" content={'Un libro de rol donde el lector es el protagonista de la historia'} />
        <link rel="icon" href="/lobo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <header className='w-full h-12 fixed bg-navbar'>
        <Navbar />
      </header>
      <body className='pergamino-theme fixed inset-0 overflow-hidden h-full'>
        <nav className='w-full h-12 fixed bg-navbar'></nav>
        <main className='pergamino-theme mobile-only h-full'>{children}
        </main>
        <div className="desktop-message">
          <div className="fixed inset-0 pergamino-simple-theme flex items-center justify-center">
            <p className="text-center text-red-950 font-normal text-xl">El libro solo está disponible para dispositivos móviles</p>
          </div>
        </div>
        <footer className='w-full fixed bottom-0 h-12 bg-footer'>
          <div className=" w-full h-12 flex items-center justify-center">
            <p className="text-center text-red-950 font-normal text-xs">© 2025 El Guardian y la profecia del Lobo</p>
          </div>
        </footer>
      </body>
    </html>
  );
}