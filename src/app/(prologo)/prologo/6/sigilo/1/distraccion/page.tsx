'use client';
import Main from '@/components/layout/Main';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/typography';
import useStore from '@/src/store/useStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Dice from 'react-dice-roll';
const Page = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const router = useRouter();
  const { wolfName, setCurrentPage, removeVida } = useStore();

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
    setCurrentPage(`/prologo/6/sigilo/1/distraccion/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/6/sigilo/1/distraccion/${ruta}`); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  const handleDados = (res: number) => {
    setDiceValue(res);
    if (res <= 3) {
      removeVida(res);
    }
    console.log(res);

    return res;
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
                Decides utilizar los objetos cercanos para crear una distracción
                y alejar a los bandidos de Lia.
                <br />
              </Typography>
            </div>
          </motion.div>
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
                Lanza el dado para saber si es suficiente para distraer a los
                bandidos.
                <br />
                Como tienes la habilidad de Sigilo solo necesitaras 2 o más para
                tener éxito.
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
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <Dice
              faceBg="#7f1d1d"
              size={100}
              onRoll={value => handleDados(value)}
              disabled={diceValue !== null}
            />
            {diceValue !== null && diceValue < 2 && (
              <div className="pt-6 pb-12 mb-12">
                <Typography variant="p" className="py-4">
                  Lanzas la roca al arbusto, pero haces mucho ruido y los
                  hombres se dan cuenta de tu presencia y te atacan.
                </Typography>
                <Button
                  onClick={() => handlePage('1')}
                  className="w-full bg-red-950 text-white"
                >
                  Continuar
                </Button>
              </div>
            )}
            {diceValue !== null && diceValue >= 2 && (
              <div className="pt-6 pb-12 mb-12">
                <Typography variant="p" className="py-4">
                  Observas los objetos alrededor de la fogata: una cuerda, un
                  saco de provisiones y una manta. Elabores rápidamente un plan.
                  Lanzas la cuerda a un arbusto cercano, creando un ruido que
                  atrae la atención de los bandidos. Mientras ellos se acercan
                  para investigar el ruido, utilizas la manta para cubrir la
                  fogata y apagarla momentáneamente, sumiendo el área en
                  oscuridad. Aprovechas la confusión y, con la ayuda de{' '}
                  <span className="text-red-950 px-1">{wolfName}</span>, te
                  deslizas hacia Lia y comienzas a desatarla.
                </Typography>
                <Button
                  onClick={() => handlePage('1')}
                  className="w-full bg-red-950 text-white"
                >
                  Continuar
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </AnimatePresence>
    </Main>
  );
};

export default Page;
