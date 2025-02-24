'use client';
import Main from '@/components/layout/Main';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/typography';
import useStore from '@/src/store/useStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Item from '@/components/Item';
const Page = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const router = useRouter();
  const {setCurrentPage, addInventario } = useStore();

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
    setCurrentPage('/prologo/5/camino-de-rocas/3');
    setTimeout(() => {
      router.push('/prologo/5/camino-de-rocas/3'); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  const handleAddDaga = () => {
    addInventario({
      name: 'Daga',
      type: 'arma',
      svg: 'Pipette',
      value: 2,
    });
    handlePage();
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
            {' '}
            <div className="">
              <Typography variant="p" className="pb-4">
                Justo al final de la escalada, ves una cabaña destruida, con las
                paredes derrumbadas y el techo colapsado. Parece haber sido
                abandonada hace mucho tiempo. Al acercarte con cautela, algo
                reluce entre los escombros. Te agachas y descubres una pequeña
                daga, con un mango de cuero y una hoja que aún brilla bajo la
                luz menguante. Decides llevarte la daga, ya que podría serte de
                ayuda más adelante.
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
              <Item
                inventario={{
                  name: 'Daga',
                  type: 'arma',
                  svg: 'Pipette',
                  value: 2,
                }}
              />
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
            <div className="py-6 w-full">
              <Button
                onClick={handlePage}
                className="w-full bg-red-950 text-white"
              >
              Solo  continuar
              </Button>
              </div>
              <Button
                onClick={handleAddDaga}
                className="w-full bg-red-950 text-white"
              >
                Agregarla al inventario y continuar
              </Button>
            
          </motion.div>
        </div>
      </AnimatePresence>
    </Main>
  );
};

export default Page;
