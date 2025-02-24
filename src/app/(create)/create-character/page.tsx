'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import NameSection from './components/NameSection';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import Main from '@/components/layout/Main';
import { Button } from '@/components/ui/button';
import useStore, { Inventario } from '../../../store/useStore';
import { useRouter } from 'next/navigation';
import { capitalizeFirstLetter } from '@/lib/helpers/mayuscula';
import { motion } from 'framer-motion';

const schema = z.object({
  nombre: z.string().min(3, "El nombre del personaje es obligatorio").max(20, "El nombre del personaje no puede exceder de 20 caracteres"),
  wolfName: z.string().min(3, "El nombre del lobo es obligatorio").max(20, "El nombre del personaje no puede exceder de 20 caracteres"),
  sexo: z.enum(['hombre', 'mujer']),
  agilidad: z.number().min(0).max(5),
  fuerza: z.number().min(0).max(5),
  vitalidad: z.number().min(0).max(5),
  skill: z.enum(['rastreo', 'sigilo', 'maestro en armas', 'comerciante', 'intuicion']),
}).refine(data => {
  const totalPoints = data.agilidad + data.fuerza + data.vitalidad;
  return totalPoints <= 5;
}, {
  message: "Los puntos totales no pueden exceder de 5",
  path: ["agilidad", "fuerza", "vitalidad"]
});

const inventario: Inventario[] = [

  {
    name: "Pocion",
    type: 'pocion',
    svg: "FlaskRound",
    value: 2,
  },
  {
    name: "Hacha",
    type: 'arma',
    svg: "Axe",
    value: 1,
  },
  {
    name: "Comida",
    type: 'comida',
    svg: "Ham",
    value: 1,
  },

  {
    name: "Pocion",
    type: 'pocion',
    svg: "FlaskRound",
    value: 2,
  },
  {
    name: "Hacha",
    type: 'arma',
    svg: "Axe",
    value: 1,
  },
  {
    name: "Espada Doble",
    type: 'arma',
    svg: "Swords",
    value: 2,
  },

]


const Page = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      agilidad: 0,
      fuerza: 0,
      vitalidad: 0,
    }
  });
  const router = useRouter();
  const { setCharacter, setVida, setVidaMaxima } = useStore.getState();

  const onSubmit = data => {

    setCharacter({
      nombre: data.nombre,
      wolfName: data.wolfName,
      currentPage: '/prologo',
      sexo: data.sexo,
      economia: data.skill === "comerciante" ? 5 : 2,
      atributo: {
        agilidad: data.agilidad,
        fuerza: data.skill === "maestro en armas" ? data.fuerza + 2 : data.fuerza,
        vitalidad: data.vitalidad,
      },
      inventario: inventario,
      skill: [capitalizeFirstLetter(data.skill) as 'Rastreo' | 'Sigilo' | 'Maestro en armas' | 'Comerciante' | 'Intuicion'],
    });
    if (data.vitalidad <= 3 && data.vitalidad > 1) {
      setVida(30)
      setVidaMaxima(30);
    }
    setStartAnimation(true);
    setTimeout(() => {
      router.push('/prologo'); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  const totalPoints = methods.watch(['agilidad', 'fuerza', 'vitalidad']).reduce((acc, val) => acc + (val || 0), 0);

  const variants = {
    hidden: { opacity: 0, x: 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.5,
        duration: 0.9,
      },
    }),
  };


  return (
    <Main className={`mobile-only py-16 h-full container max-2xl flex flex-col gap-4 overflow-y-auto items-center ${startAnimation ? 'page-animation' : ''}`}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto max-h-screen ">
          <div className="w-full">
            <motion.div custom={0} initial="hidden" animate="visible" variants={variants}>
              <NameSection />
            </motion.div>
            <motion.div custom={1} initial="hidden" animate="visible" variants={variants}>
              <StatsSection />
            </motion.div>
            <motion.div custom={2} initial="hidden" animate="visible" variants={variants}>
              <SkillsSection />
            </motion.div>
            <motion.div custom={3} initial="hidden" animate="visible" variants={variants}>
              <Button type="submit" disabled={totalPoints > 5 ? true : false} className="w-full bg-red-950 text-white mb-20">
                Crear personaje
              </Button>
            </motion.div>
          </div>
        </form>
      </FormProvider>
    </Main>
  );
};

export default Page;