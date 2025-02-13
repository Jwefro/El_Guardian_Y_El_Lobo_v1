import './globals.css';

import React from 'react';
export const metadata = {
  title: 'El Guardian y la profecia del Lobo',
  description: 'Un libro de rol donde el lector es el protagonista de la historia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body >
        <main className='pergamino-theme h-full'>{children}
        </main>
      </body>
    </html>
  )
}
