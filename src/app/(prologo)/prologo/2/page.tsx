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
  const { setCurrentPage, sexo } = useStore();

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
    setCurrentPage('/prologo/3');
    setTimeout(() => {
      router.push('/prologo/3'); // Redirige a la página del juego después de la animación
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
              <Typography variant="p" className="">
                Una tarde, mientras el sol se desvanecía en el horizonte,
                cubriendo la aldea con una suave luz dorada, una noticia
                inquietante llegó a tus oídos. Una niña llamada Lia había
                desaparecido en las montañas cercanas mientras recogía flores.
                <br />
                Ella era la hija de tu mejor amigo de la infancia Aldric , quien
                había fallecido en un accidente trágico años atrás en el reino
                de Valoria. Desde entonces, te habías convertido en una especie
                de {sexo === 'hombre' ?"mentor y protector" : 'mentora y protectora'} para Lia. Su madre, llamada Maris ,
                sobrecargada por la pérdida, apreciaba profundamente el vínculo
                que habías formado con su hija. Ahora, Lia estaba en peligro y
                necesitaba tu ayuda.
              </Typography>
            </div>
          </motion.div>
          <motion.div
            key={1}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={2}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <div className="pt-6">
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
