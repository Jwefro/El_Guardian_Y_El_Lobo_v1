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
    setCurrentPage(`/prologo/5/camino-de-rocas/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/5/camino-de-rocas/${ruta}`); // Redirige a la página del juego después de la animación
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
                Decides enfrentar el desafío del primer camino y te preparas
                para trepar por las rocas.{' '}
                <span className="text-red-950 px-1">{wolfName}</span> te sigue
                de cerca hasta que las rocas se vuelven demasiado altas y
                empinadas. Se queda abajo, observándote atentamente.
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
                A medida que asciendes, las rocas se vuelven cada vez más
                resbaladizas. Tomas un respiro y miras a tu alrededor desde una
                altura considerable. La vista es impresionante, pero no hay
                señales de Lia. La preocupación comienza a instalarse en tu
                mente. Derrepente se te rescala una mano y estas a punto de caer
                <br />
                <br />
                Lanza los dados para ver si puedes continuar.
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
            {diceValue !== null && diceValue <= 3 && (
              <div className="pt-6 pb-12 mb-12">
                <Typography variant="p" className="py-4">
                  Tus manos resbalan y pierdes el equilibrio. Caes de espaldas,
                  rodando hacia abajo y golpeándote con las rocas en el proceso.
                  Sientes un dolor agudo y pierdes{' '}
                  <span className="text-red-950">{diceValue}</span> puntos de
                  vida debido a las lesiones. Ten cuidado, cada paso es crucial
                  en esta peligrosa travesía.
                </Typography>
                <Button
                  onClick={() => handlePage('1')}
                  className="w-full bg-red-950 text-white"
                >
                  Continuar
                </Button>
              </div>
            )}
            {diceValue !== null && diceValue > 3 && (
              <div className="pt-6 pb-12 mb-12">
                <Typography variant="p" className="py-4">
                  ¡Has superado el desafío! Continúas ascendiendo por las rocas
                  con determinación y valentía.
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
