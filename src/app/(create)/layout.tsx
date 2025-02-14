import '../globals.css';

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
      <body className='pergamino-theme h-full'>
        <nav className='w-full h-12 fixed bg-navbar'></nav>
        <main className='flex flex-col items-center w-full'>
          {children}
        </main>
        <footer className='w-full fixed bottom-0 h-12 bg-footer'>
          <div className=" w-full h-12 flex items-center justify-center">
            <p className="text-center text-red-950 font-normal text-xs">© 2022 El Guardian y la profecia del Lobo</p>
          </div>
        </footer>
      </body>
    </html>
  )
}