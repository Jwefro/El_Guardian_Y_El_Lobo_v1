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
    setCurrentPage(`/prologo/6/sigilo/1/desarmar/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/6/sigilo/1/desarmar/${ruta}`); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  const handleDados = (res: number) => {
    setDiceValue(res);
    if (res <= 3) {
      removeVida(res);
    }
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
                Decides desarmar a los bandidos para evitar que ataquen a Lia y
                poder tener ventaja en el enfrentamiento.
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
                Lanza el dado para saber si es suficiente para que tu plan de
                desarmar a los bandidos funcione.
                <br />
                Como tienes la habilidad de Sigilo solo necesitaras 3 o más para
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
            {diceValue !== null && diceValue < 3 && (
              <div className="pt-6 pb-12 mb-12">
                <Typography variant="p" className="py-4">
                  Te mueves con cautela entre las sombras, midiendo cada paso y
                  evitando las ramas secas bajo tus pies. El brillo de la fogata
                  ilumina parcialmente el claro, y la risa de los bandidos llena
                  el aire nocturno. Con{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> a tu
                  lado, avanzas hasta colocarte detrás de uno de los bandidos.
                  Calculas cuidadosamente el momento para desarmarlo, pero justo
                  cuando te acercas para arrebatárselo, tu pie pisa una roca
                  suelta. El crujido resuena más fuerte de lo que esperabas,
                  haciendo que los tres bandidos se giren bruscamente hacia ti.
                  Uno de ellos grita: &quot;¡¿Quién anda ahí?!&quot; y
                  rápidamente toma su daga.{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> gruñe
                  con fuerza, poniéndose en guardia a tu lado, pero la sorpresa
                  que planeabas se ha perdido. Ahora estás en una posición
                  vulnerable, con los tres bandidos completamente alertas.
                </Typography>
                <Button
                  onClick={() => handlePage('1')}
                  className="w-full bg-red-950 text-white"
                >
                  Continuar
                </Button>
              </div>
            )}
            {diceValue !== null && diceValue >= 3 && (
              <div className="pt-6 pb-20 mb-12">
                <Typography variant="p" className="py-4">
                  Te deslizas en completo silencio entre los árboles y las
                  sombras, la tenue luz de la fogata guiándote hacia los
                  bandidos. Los tres están distraídos: uno afila su daga, el
                  otro bebe de un odre y el tercero revisa el contenido de un
                  saco. Con{' '}
                  <span className="text-red-950 px-1">{wolfName}</span>{' '}
                  esperando pacientemente, preparas tu plan.
                  <br />
                  <br />
                  Te mueves hacia el primer bandido, que está más cerca de la
                  fogata. Con una velocidad impresionante, lo golpeas con el
                  mango de su propia daga en la nuca, dejándolo inconsciente al
                  instante. Antes de que su cuerpo pueda caer al suelo y hacer
                  ruido, lo sujetas suavemente y lo acomodas contra un tronco,
                  como si estuviera dormido.
                  <br />
                  <br />
                  Acto seguido, avanzas hacia el segundo bandido. Este apenas
                  tiene tiempo de reaccionar antes de que lo sorprendas por
                  detrás. Usas la misma táctica, pero esta vez con más fuerza,
                  para asegurarte de que su cuerpo inerte no alerte al hombre
                  restante.
                  <br />
                  <br />
                  Finalmente, el tercer bandido se percata de un movimiento en
                  la periferia de su visión, pero antes de que pueda reaccionar
                  del todo,{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> salta
                  sobre él con precisión. Lo derriba al suelo, gruñendo mientras
                  lo inmoviliza. Aprovechas el momento para propinarle un golpe
                  contundente con el mango de la daga recuperada, dejándolo
                  inconsciente junto a sus compañeros.
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
