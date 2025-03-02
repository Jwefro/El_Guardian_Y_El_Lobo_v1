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
    setCurrentPage(`/prologo/6/intuicion/1/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/6/intuicion/1/${ruta}`); // Redirige a la página del juego después de la animación
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
                Tu corazón se acelera, pero mantienes la calma. Ahora debes
                idear un plan para enfrentarte a los bandidos y rescatar a Lia,
                confiando en las habilidades y recursos a tu disposición.
                piensas en que puedes crear una distracción utilizando los
                objetos cercanos, o coordinar un ataque sorpresa con la ayuda de{' '}
                <span className="text-red-950 px-1">{wolfName}</span>.
                <br />
                <br />
                Desde tu posición estratégica, te tomas un momento para evaluar
                la situación. Tu respiración se calma mientras la adrenalina
                comienza a recorrer tu cuerpo. Sabes que cualquier error podría
                poner en peligro a Lia, así que decides actuar con precisión.
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
                Te concentras en estudiar a los bandidos. Uno afila
                distraídamente una daga cerca de la fogata, el segundo revuelve
                los restos de un saco de provisiones, y el tercero, más robusto,
                descansando en un tronco con una pesada maza a su lado. Cada uno
                tiene un patrón de movimiento que podrías aprovechar. Mides las
                distancias entre ellos, la fogata y Lia, buscando puntos débiles
                en su formación.
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
            <div className="">
              <Typography variant="p" className="pb-4">
                A tu alrededor, el paisaje se convierte en tu aliado. Notas un
                par de piedras sueltas cerca de tus pies y ramas secas a unos
                metros de distancia. Si decides crear una distracción, estos
                objetos podrían ayudarte a redirigir la atención de los
                bandidos. También identificas un árbol con suficiente cobertura
                como para esconderte y realizar el primer movimiento.
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
            className="w-full h-2/4 flex flex-col justify-end items-center mb-20 pb-20"
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
