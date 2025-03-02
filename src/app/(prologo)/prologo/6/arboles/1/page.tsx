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
  const { setCurrentPage, wolfName } = useStore();

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
    setCurrentPage(`/prologo/6/sigilo/1/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/6/sigilo/1/${ruta}`); // Redirige a la página del juego después de la animación
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
                Te Debes idear un plan para enfrentarlos y rescatar a Lia.
                Podrías crear una distracción utilizando los objetos cercanos, o
                coordinar un ataque sorpresa con la ayuda de{' '}
                <span className="text-red-950 px-1">{wolfName}</span>. Tu mente
                trabaja rápidamente, evaluando las opciones y preparando el
                terreno para la acción.
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
            <div className="pt-6">
              <Button
                onClick={() => handlePage('distraccion')}
                className="w-full bg-red-950 text-white"
              >
                Crear una Distracción
              </Button>
            </div>
            <div className="pt-6">
              <Button
                onClick={() => handlePage('ataque-sorpresa')}
                className="w-full bg-red-950 text-white"
              >
                Ataque Sorpresa
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </Main>
  );
};

export default Page;
