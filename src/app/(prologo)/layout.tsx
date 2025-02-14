'use client';
import Navbar from '@/components/navBar';
import '../globals.css';
import '../../../styles/reactImageZoom.css'

import React from 'react';
import Head from 'next/head';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <title>El Guardian y la profecia del Lobo</title>
        <meta name="description" content="Un libro de rol donde el lector es el protagonista de la historia" />
      </Head>

      <body className='pergamino-theme h-full'>
        <Navbar />
        <div className='flex flex-col items-center w-full'>
          {children}
        </div>
        <footer className='w-full fixed bottom-0 h-12 bg-footer'>
          <div className=" w-full h-12 flex items-center justify-center">
            <p className="text-center text-red-950 font-normal text-xs">© 2022 El Guardian y la profecia del Lobo</p>
          </div>
        </footer>
      </body>
    </html>
  )
}