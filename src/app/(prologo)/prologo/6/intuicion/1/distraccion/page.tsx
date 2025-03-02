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
  const { wolfName, setCurrentPage, removeVida, skill } = useStore();

  const valorRequeridoAccion = skill.includes('Sigilo') ? 2 : 3;
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
    setCurrentPage(`/prologo/6/intuicion/1/distraccion/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/6/intuicion/1/distraccion/${ruta}`); // Redirige a la página del juego después de la animación
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
                Has analizado todo lo posible y estás listo para actuar. Una
                leve brisa pasa a través de los árboles, haciendo que las llamas
                de la fogata bailen y proyecten sombras inquietantes sobre los
                rostros de los bandidos. Esto podría ser una ventaja, ya que un
                cambio repentino de luz puede confundirse con los movimientos en
                las sombras. Tomas una última bocanada de aire, miras a{' '}
                <span className="text-red-950 px-1">{wolfName}</span>, y
                asientes. Es hora de poner en marcha tu plan.
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
                {skill.includes('Sigilo')
                  ? 'Como tienes la habilidad de Sigilo solo necesitaras 2 o más para tener éxito.'
                  : 'Como no tienes la habilidad de Sigilo necesitaras 3 o más para tener éxito.'}
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
            {diceValue !== null && diceValue < valorRequeridoAccion && (
              <div className="pt-6 pb-12 mb-12">
                <Typography variant="p" className="py-4">
                  Lanzas Las piedras a un arbusto cercano y los hombres se dan
                  cuenta de tu presencia asi que rapidemente se acercan para
                  atacarte.
                </Typography>
                <Button
                  onClick={() => handlePage('1')}
                  className="w-full bg-red-950 text-white"
                >
                  Continuar
                </Button>
              </div>
            )}
            {diceValue !== null && diceValue >= valorRequeridoAccion && (
              <div className="pt-6 pb-12 mb-12">
                <Typography variant="p" className="py-4">
                  Te deslizas hacia las sombras, moviéndote tan silenciosamente
                  como puedes. Una vez en posición, arrojas una de las piedras
                  hacia los arbustos opuestos a tu ubicación. El impacto hace
                  que las ramas crujan y las hojas tiemblen, rompiendo el
                  silencio de la noche. El sonido es lo suficientemente extraño
                  para captar la atención de los tres bandidos.
                  <br />
                  <br />
                  &quot;¿Qué fue eso?&quot; pregunta uno de ellos, poniéndose de
                  pie y tomando su daga. El segundo bandido, visiblemente
                  molesto, murmura algo inaudible mientras se dirige hacia el
                  origen del ruido, con su espada lista. Aprovechas la
                  distracción para desatar a Lia mientras el que piensas que es
                  el líder está distraído.
                </Typography>
                <Button
                  onClick={() => handlePage('2')}
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
