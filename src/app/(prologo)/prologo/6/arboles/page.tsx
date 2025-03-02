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
  const [currentParagraph, setCurrentParagraph] = useState(0);
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

  const handleNextParagraph = () => {
    if (currentParagraph < 2) {
      setCurrentParagraph(currentParagraph + 1);
    } else {
      handlePage();
    }
  };

  const handlePage = () => {
    setStartAnimation(true);
    setCurrentPage('/prologo/6/arboles/1');
    setTimeout(() => {
      router.push('/prologo/6/arboles/1'); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  return (
    <Main
      className={`mobile-only py-16 mb-12 h-full container max-2xl flex flex-col gap-4 overflow-y-auto items-center ${
        startAnimation ? 'page-animation' : ''
      }`}
    >
      <AnimatePresence>
        <div className="w-full max-h-screen mb-16 pb-12">
          {currentParagraph >= 0 && (
            <motion.div
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
                  Te deslizas entre los árboles y las rocas, cada paso calculado
                  para no hacer ruido. La fogata se vuelve más visible y
                  escuchas voces bajas y risas. El aire nocturno es frío, y el
                  crujido de las hojas bajo tus pies se siente amplificado en el
                  silencio de la noche. A medida que te acercas, el resplandor
                  del fuego proyecta sombras alargadas y danzantes sobre los
                  troncos de los árboles.
                </Typography>
              </div>
            </motion.div>
          )}
          {currentParagraph >= 1 && (
            <motion.div
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
                  Te detienes detrás de un arbusto frondoso y te tomas un
                  momento para observar. La luz de la fogata ilumina a tres
                  bandidos, sus rostros ásperos y marcados por cicatrices. Están
                  sentados alrededor del fuego, uno de ellos afila una daga
                  mientras los otros dos ríen y beben de una botella de licor.
                  Desde tu posición oculta, también vislumbras una pequeña
                  figura atada a un árbol cercano: es Lia. Su rostro muestra
                  señales de miedo y cansancio, y su respiración es rápida y
                  superficial. Afortunadamente, parece ilesa.
                </Typography>
              </div>
            </motion.div>
          )}
          {currentParagraph >= 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variantsTwo}
              custom={2}
              transition={{ duration: 2 }}
              className="w-full h-2/4 flex flex-col justify-end items-center"
            >
              <div className="">
                <Typography variant="p" className="pb-4">
                  <span className="text-red-950 px-1">{wolfName}</span>, fiel y
                  silencioso a tu lado, mantiene la cabeza baja y las orejas
                  erguidas, atento a cualquier movimiento. Sabes que cualquier
                  ruido podría delatar vuestra posición y poner en peligro a
                  Lia. Miras alrededor y notas que hay varios objetos dispersos
                  cerca de los bandidos: una roca, un saco de provisiones y una
                  manta. Podrían ser útiles para un plan de rescate.
                </Typography>
              </div>
            </motion.div>
          )}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={3}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <div className="pt-6 pb-12 mb-12">
              <Button
                onClick={handleNextParagraph}
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
