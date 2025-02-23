'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Main from "../../components/layout/Main";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useStore from "../store/useStore";

const HomePage: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const { setCurrentPage, currentPage } = useStore();
  const router = useRouter();

  useEffect(() => {
    const checkIfInstalled = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone) {
        setIsInstalled(true);
      }
    };

    checkIfInstalled();
    window.addEventListener('appinstalled', checkIfInstalled);

    return () => {
      window.removeEventListener('appinstalled', checkIfInstalled);
    };
  }, []);

  const handleStartGame = () => {
    setStartAnimation(true);
    setCurrentPage('/create-character'); // Guarda la página actual en el store
    setTimeout(() => {
      router.push('/create-character');
    }, 500); // Duración de la animación en milisegundos
  };

  const handleLoadGame = () => {
    setStartAnimation(true);
    setTimeout(() => {
      router.push(currentPage);
    }, 500); // Duración de la animación en milisegundos
  };

  const handleCreateShortcut = async () => {
    if ('share' in navigator) {
      try {
        await navigator.share({
          title: 'Mapa del Reino',
          text: 'Accede al Mapa del Reino desde tu pantalla de inicio',
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error al crear el acceso directo:', error);
      }
    }
  };

  return (
    <div className="pergamino-theme">
      <Main className={`portada-theme mobile-only bg- container h-screen max-2xl flex flex-col gap-4 items-center ${startAnimation ? 'page-animation' : ''}`}>
        <div className="w-full h-2/5 pl-4 flex justify-center items-center">
          <Image src="/title.png" alt="logo" width={300} height={300} />
        </div>
        <div className="flex h-3/5 flex-col justify-center items-center gap-4">
          <Button onClick={handleStartGame} disabled={currentPage !== "/"} className="w-11/12 border-yellow-100 border bg-green-950 bg-opacity-70 mx-auto">
            Nueva Partida
          </Button>
          {
            currentPage !== "/" && (
              <Button onClick={handleLoadGame} className="w-11/12 border-yellow-100 border bg-green-950 bg-opacity-70 mx-auto">
                Cargar Partida
              </Button>
            )
          }
          {
            !isInstalled && (
              <Button onClick={handleCreateShortcut} className="w-11/12 border-yellow-100 border bg-red-950 bg-opacity-70 mx-auto">
                Crear Acceso Directo
              </Button>
            )
          }
        </div>
        <div className="desktop-message">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">
              Esta aplicación solo está disponible en dispositivos móviles.
            </h1>
          </div>
        </div>
      </Main>
    </div>
  );
};

export default HomePage;