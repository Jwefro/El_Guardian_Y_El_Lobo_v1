'use client';
import React, { useState } from "react";
import Image from "next/image";
import Main from "../../components/layout/Main";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HomePage: React.FC = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const router = useRouter();

  const handleStartGame = () => {
    setStartAnimation(true);
    setTimeout(() => {
      router.push('/create-character'); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  return (
    <div className="pergamino-theme">
      <Main className={`portada-theme mobile-only bg- container h-screen max-2xl flex flex-col gap-4 items-center ${startAnimation ? 'page-animation' : ''}`}>
        <div className="w-full h-2/5 pl-4 flex justify-center items-center">
          <Image src="/title.png" alt="logo" width={300} height={300} />
        </div>
        <div className="flex h-3/5 justify-center items-center">
          <Button onClick={handleStartGame} className="w-11/12 border-yellow-100 border bg-green-950 bg-opacity-70 mx-auto">
            Nueva Partida
          </Button>
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