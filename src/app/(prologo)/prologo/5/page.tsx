'use client';
import Main from '@/components/layout/Main';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/typography';
import useStore from '@/src/store/useStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
const Page = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const router = useRouter();
  const { setCurrentPage, skill } = useStore();

  const variantsTwo = {
    hidden: { opacity: 0, x: 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.9,
        duration: 0.9,
      },
    }),
  };

  const handlePage = (ruta: string) => {
    setStartAnimation(true);
    setCurrentPage(`/prologo/5/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/5/${ruta}`); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  return (
    <Main
      className={`mobile-only py-16 mb-12 h-full container max-2xl flex flex-col gap-4 overflow-y-auto items-center ${
        startAnimation ? 'page-animation' : ''
      }`}
    >
      <AnimatePresence>
        <div className="w-full  max-h-screen mb-16 pb-12">
          <motion.div
            key={0}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={0}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <div className="">
              <Typography variant="p" className="pb-4">
                Un camino a tu izquierda está obstruido por grandes rocas. Las
                piedras son irregulares y resbaladizas, probablemente resultado
                de un desprendimiento reciente. Para continuar por este sendero,
                tendrás que trepar y escalar con cuidado para no perder el
                equilibrio y caer.
              </Typography>
            </div>
          </motion.div>
          <motion.div
            key={1}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={1}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <div className="">
              <Typography variant="p" className="pb-4">
                El otro camino a tu derecha está lleno de barro espeso,
                resultado de una tormenta reciente que azotó la región. El agua
                acumulada forma pequeños charcos que reflejan la luz de la luna,
                añadiendo un toque fantasmal al paisaje.
              </Typography>
            </div>
          </motion.div>

          <motion.div
            key={2}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={2}
            transition={{ duration: 2 }}
            className="w-full  flex flex-col justify-end items-center mb-8 pb-20"
          >
            <div className="pt-2 w-full">
              <Button
                onClick={() => handlePage('rastreo')}
                disabled={!skill.includes('Rastreo')}
                className="w-full bg-red-950 text-white"
              >
                Habilidad de Rastreo
              </Button>
            </div>

            <div className="pt-2 w-full">
              <Button
                onClick={() => handlePage('intuicion')}
                disabled={!skill.includes('Intuicion')}
                className="w-full bg-red-950 text-white"
              >
                Habilidad de Intuición
              </Button>
            </div>
            <div className="pt-2 w-full">
              <Button
                onClick={() => handlePage('intuicion')}
                className="w-full bg-red-950 text-white"
              >
                Camino de Barro
              </Button>
            </div>
            <div className="pt-2 w-full">
              <Button
                onClick={() => handlePage('camino-de-rocas')}
                className="w-full bg-red-950 text-white"
              >
                Camino de Piedras
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </Main>
  );
};

export default Page;
