'use client';
/* import useStore from '../../store/useStore';
import { useRouter } from 'next/navigation';
 */
import '../globals.css';

import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
/*   const { currentPage } = useStore.getState();
  const router = useRouter();
  */
/*   useEffect(() => {
    const currentPath = window?.location?.pathname;
    if (currentPath !== currentPage) {
      console.log(`El path actual (${currentPath}) es diferente al currentPage (${currentPage})`);
      router.push(currentPage);
    }
  }, []);
 */
  return (
    <html lang="en" className="dark">
      <body className='pergamino-theme h-full'>
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
  )
}