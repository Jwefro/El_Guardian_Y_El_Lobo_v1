'use client';
import Main from '@/components/layout/Main';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/typography';
import useStore from '@/src/store/useStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Dice from 'react-dice-roll';
import { HeartPulse, Swords, User } from 'lucide-react';
import { renderIcon } from '@/lib/utils/utils';

type BandidoType = {
  name: string;
  vida: number;
  ataque: number;
};

type HistorialType = {
  name: string;
  dano: number;
  danoRecibido: number;
};

const Page = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const [currentBandidoIndex, setCurrentBandidoIndex] = useState(0);
  const [bandidos, setBandidos] = useState<BandidoType[]>([
    {
      name: 'Secuestrador 1',
      vida: 20,
      ataque: 4,
    },
    {
      name: 'Secuestrador 2',
      vida: 20,
      ataque: 4,
    },
    {
      name: 'Secuestrador 3',
      vida: 20,
      ataque: 3,
    },
  ]);
  const [historial, setHistorial] = useState<HistorialType[]>([]);
  const router = useRouter();
  const {
    wolfName,
    setCurrentPage,
    removeVida,
    vida,
    armaEquipada,
    atributo,
    nombre,
    vidaMaxima,
    setCharacter,
  } = useStore();
  const fuerza = calcularValor(atributo.fuerza);
  console.log(fuerza);

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
    console.log(ruta);
    
    setStartAnimation(true);
    setCurrentPage(`/prologo/6`);
    setTimeout(() => {
      router.push(`/prologo/6`);
    }, 500);
  };
  const handleDados = (res: number) => {
    setDiceValue(res);
    updateBandidoVida(res);
  };

  const updateBandidoVida = (damage: number) => {
    const totalDamage =
      armaEquipada !== null
        ? damage + (armaEquipada.value ?? 0) + fuerza
        : damage + fuerza;
    if (currentBandidoIndex < bandidos.length) {
      const updatedBandidos = [...bandidos];
      const currentBandido = updatedBandidos[currentBandidoIndex];
      currentBandido.vida -= totalDamage;
      const randomDamage =
        Math.floor(Math.random() * currentBandido.ataque) + 1;
      removeVida(randomDamage);

      setHistorial(prevHistorial => [
        ...prevHistorial,
        {
          name: currentBandido.name,
          dano: totalDamage,
          danoRecibido: randomDamage,
        },
      ]);

      setBandidos(updatedBandidos);

      if (currentBandido.vida <= 0) {
        if (currentBandidoIndex < bandidos.length - 1) {
          setCurrentBandidoIndex(currentBandidoIndex + 1);
        }
      }

      if (vida <= 0) {
        handleGameOver();
      }
    }
  };

  const handleGameOver = () => {
    setCharacter({
      nombre: '',
      wolfName: '',
      vida: 0,
      vidaMaxima: 0,
      atributo: {
        fuerza: 0,
        agilidad: 0,
        vitalidad: 0,
      },
      armaEquipada: null,
      currentPage: '/',
    });
    router.push('/');
    // Aquí puedes redirigir a una página de fin de juego o realizar otras acciones
  };

  useEffect(() => {
    if (vida <= 0) {
      handleGameOver();
    }
  }, [vida]);

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
                Rapidamente te diriges a desatar a Lia. le dices que salga
                corriendo junto a{' '}
                <span className="text-red-950 px-1">{wolfName}</span> hacia la
                aldea y huyan lo mas lejos posible. Seguidamente{' '}
                <span className="text-red-950 px-1">{wolfName}</span> pega un
                ahullido en señal de que los bandidos se estan despertanto y
                volviendo en si.
                <br />
                <br />
                Lia se monta en{' '}
                <span className="text-red-950 px-1">{wolfName}</span> y se
                alejan a toda velocidad.
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
              <Typography variant="p" className="pt-4">
                Debes luchas contra los bandidos que estan desarmados para darle
                tiempo a Lia y{' '}
                <span className="text-red-950 px-1">{wolfName}</span> de
                escapar.
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
              <Typography variant="small" className="text-xs py-8">
                Nota: si tienes alguna arma puedes equiparla en el inventario.
                <br />
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
            <div className="flex w-full border border-red-950 rounded justify-between items-start px-2 my-6">
              <div className="">
                <Typography className="font-semibold text-red-950">
                  Nombre
                </Typography>
                <div className="flex items-start gap-1">
                  <User className="text-red-950" />
                  <Typography>{nombre}</Typography>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Typography className="font-semibold text-red-950">
                  Equipado
                </Typography>
                <div className="flex flex-col items-center justify-center w-20 px-1">
                  {renderIcon(armaEquipada?.svg)}
                  <Typography
                    variant="small"
                    className=" text-xs  font-semibold"
                  >
                    {armaEquipada?.name}
                  </Typography>
                  <Typography variant="small" className=" text-xs ">
                    {armaEquipada !== null
                      ? `+${armaEquipada?.value} atk`
                      : null}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start pt-2">
                <HeartPulse className="text-red-950" />
                <Typography className="mt-0">
                  {vida}/{vidaMaxima}
                </Typography>
              </div>
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
            <Swords className="items-center" size={30} />
          </motion.div>
          <motion.div
            key={5}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={5}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center"
          >
            <div className="w-full pt-4">
              <div className="flex justify-between w-full gap-4 flex-wrap">
                {bandidos.map((bandido, index) => (
                  <div key={index} className="flex items-center w-30">
                    <User size={30} />
                    <Typography variant="small" className="">
                      {bandido.name} <br /> Vida: {bandido.vida}
                    </Typography>
                  </div>
                ))}
              </div>
              {historial.length > 0 ? (
                <>
                  <Typography variant="p" className="py-4">
                    Historial de Combate:
                  </Typography>
                  <div className="max-h-52 overflow-y-auto">
                    {historial.map((entry, index) => (
                      <div key={index} className="flex items-start w-full">
                        <User size={30} />

                        <Typography variant="p" className="pb-2">
                          {entry.name} / Daño hecho: {entry.dano} / Daño
                          recibido:
                          {entry.danoRecibido}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          </motion.div>
          <motion.div
            key={6}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsTwo}
            custom={6}
            transition={{ duration: 2 }}
            className="w-full h-2/4 flex flex-col justify-end items-center mt-8 mb-16 pb-20"
          >
            <Dice
              faceBg="#7f1d1d"
              size={100}
              onRoll={value => handleDados(value)}
            />

            {bandidos.every(bandido => bandido.vida <= 0) && (
              <div className="w-full pt-6 pb-12 mb-12">
                <Button
                  onClick={() => handlePage('victoria')}
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

// helper

const calcularValor = (fuerza: number): number => {
  return Math.floor(fuerza / 2);
};
