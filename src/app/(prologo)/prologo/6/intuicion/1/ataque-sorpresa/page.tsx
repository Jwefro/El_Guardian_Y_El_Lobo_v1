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
    setCurrentPage(`/prologo/6/intuicion/1/ataque-sorpresa/${ruta}`);
    setTimeout(() => {
      router.push(`/prologo/6/intuicion/1/ataque-sorpresa/${ruta}`); // Redirige a la página del juego después de la animación
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
                Decides actuar coordinando un ataque sorpresa junto a{' '}
                <span className="text-red-950 px-1">{wolfName}</span>. Desde tu
                posición oculta, observas cuidadosamente a los bandidos. Dos de
                ellos están más cerca de Lia y de la fogata, mientras que el
                tercero, armado con un arco, se encuentra más lejos, vigilando
                desde una posición elevada. Sabes que debes neutralizar a los
                dos primeros antes de enfrentarte al tercero para evitar
                cualquier peligro para Lia.
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
                Lanza el dado para saber si es suficiente para efectuar tu plan
                de ataque.
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
              <div className="pt-6 pb-20 mb-12">
                <Typography variant="p" className="py-4">
                  Te mueves cuidadosamente entre las sombras, con{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> a tu
                  lado, listos para ejecutar un ataque coordinado. Observas la
                  fogata, que proyecta un baile de luces y sombras sobre las
                  rocas y los árboles cercanos. Los bandidos permanecen
                  distraídos, conversando en voz baja mientras el calor del
                  fuego los mantiene relajados. Todo parece ir según lo
                  planeado.
                  <br />
                  <br />
                  Sin embargo, en el momento exacto en que te mueves para lanzar
                  el ataque, cometes un pequeño error. Al pasar cerca de la
                  fogata, un movimiento de tu cuerpo proyecta una sombra grande
                  y fugaz que se desliza rápidamente por el suelo y las rocas
                  cercanas. Uno de los bandidos levanta la vista de inmediato,
                  entrecerrando los ojos mientras señala hacia donde viste tu
                  sombra: &quot;¡Miren, algo se mueve ahí!&quot;
                  <br />
                  <br />
                  Los otros dos bandidos reaccionan casi al instante, poniéndose
                  de pie y tomando sus armas. El primero desenfunda una daga, el
                  segundo levanta una espada corta, y el tercero, sujeta su
                  pesada maza con ambas manos, mirándote fijamente con una
                  sonrisa de confianza.{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> gruñe
                  con fuerza al notar que han sido descubiertos, poniéndose en
                  guardia para protegerte.
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
              <div className="pt-6 pb-20 mb-12">
                <Typography variant="p" className="py-4">
                  Con un leve gesto de tu mano, señalas a{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> para que
                  se lance al ataque. El lobo responde al instante,
                  abalanzándose sobre el primer bandido con la agilidad y
                  ferocidad de un cazador experimentado. Antes de que el bandido
                  pueda reaccionar,{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> lo
                  derriba al suelo con un salto preciso, dejándolo incapaz de
                  defenderse. Con un rugido bajo y amenazante,{' '}
                  <span className="text-red-950 px-1">{wolfName}</span> muerde
                  su brazo, obligándolo a soltar su arma. Un golpe rápido y
                  preciso por tu parte deja al bandido inconsciente antes de que
                  pueda gritar.
                  <br />
                  <br />
                  Sin perder tiempo, giras hacia el segundo bandido, quien
                  apenas empieza a procesar lo que está ocurriendo. Con un
                  movimiento ágil, lo atacas directamente, utilizando cualquier
                  arma o herramienta que tengas. Tus golpes son precisos y
                  contundentes, y, combinados con la distracción que{' '}
                  <span className="text-red-950 px-1">{wolfName}</span>
                  ha creado, logras desarmarlo rápidamente. Un último golpe
                  certero lo deja también inconsciente junto a su compañero.
                  <br />
                  <br />
                  El tercer bandido, más robusto del grupo, se encuentra
                  levantándose de un tronco donde estaba descansando. A
                  diferencia de los otros, no porta una daga ni una espada; en
                  su lugar, sostiene una pesada maza que usa para imponer
                  autoridad y temor. Al escuchar el ruido del enfrentamiento, su
                  rostro muestra una mezcla de enojo y sorpresa, aunque no
                  parece intimidado por lo que acaba de suceder.
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
