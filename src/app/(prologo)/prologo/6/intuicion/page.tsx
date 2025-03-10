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
  const { setCurrentPage } = useStore();

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

  const handlePage = () => {
    setStartAnimation(true);
    setCurrentPage('/prologo/6/intuicion/1');
    setTimeout(() => {
      router.push('/prologo/6/intuicion/1'); // Redirige a la página del juego después de la animación
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
                Decides confiar en tu intuición, guiándote hacia la fogata con
                pasos cuidadosos, mientras te mantienes alerta a cualquier señal
                inusual a lo largo del camino. Tus corazonadas siempre te han
                llevado por el sendero correcto, y esta vez no es diferente.
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
                Mientras avanzas, una sensación persistente te empuja a seguir
                adelante. Algo sobre esta fogata te resulta más importante de lo
                que parece. El paisaje alrededor comienza a cambiar lentamente:
                las raíces de los árboles sobresalen del suelo como garras, y el
                terreno se vuelve más empinado. Durante tu avance, notas señales
                extrañas que confirman tus sospechas. Encuentras una rama rota
                en el suelo, que parece haber sido pisada recientemente. También
                te das cuenta de unas huellas apenas visibles en el barro,
                posiblemente de botas pesadas.
              </Typography>
            </div>
          </motion.div>
          <motion.div
            key={3}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={3}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <div className="">
              <Typography variant="p" className="pb-4">
                Siguiendo estas señales, te detienes en un punto estratégico
                desde el cual puedes observar con claridad lo que ocurre en el
                claro más adelante. A través del dosel de los árboles, ves una
                fogata rodeada por tres bandidos, que conversan en voz baja, con
                armas descansando cerca de ellos. Uno de ellos parece estar
                afilando una daga. Tu atención, sin embargo, se centra en una
                pequeña figura atada a un árbol: Lia. Su cabello iluminado por
                la luz de la fogata brilla débilmente, y aunque está inmóvil,
                parece estar consciente, aunque visiblemente agotada.
              </Typography>
            </div>
          </motion.div>
          <motion.div
            key={4}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={4}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <div className="pt-6 pb-20 mb-12">
              <Button
                onClick={handlePage}
                className="w-full bg-red-950 text-white"
              >
                Continuar
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
    </Main>
  );
};

export default Page;
