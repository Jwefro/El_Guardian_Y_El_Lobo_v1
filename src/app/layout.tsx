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
        <main className='pergamino-theme mobile-only h-full'>
          {children}
        </main>
        <div className="desktop-message">
        <div className="fixed inset-0 pergamino-simple-theme flex items-center justify-center">
            <p className="text-center text-red-950 font-normal text-xl">El libro solo está disponible para dispositivos móviles</p>
          </div>
        </div>
      </body>
    </html>
  )
}
