'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import NameSection from './components/NameSection';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import Main from '@/components/layout/Main';
import { useRouter } from 'next/navigation';

const schema = z.object({
  characterName: z.string().min(1, "El nombre del personaje es obligatorio"),
  wolfName: z.string().min(1, "El nombre del lobo es obligatorio"),
  agility: z.number().min(0).max(5),
  intellect: z.number().min(0).max(5),
  strength: z.number().min(0).max(5),
  vitality: z.number().min(0).max(5),
  skill: z.enum(['rastreo', 'sigilo', 'maestro_en_armas', 'comerciante', 'intuicion']),
}).refine(data => {
  const totalPoints = data.agility + data.intellect + data.strength + data.vitality;
  return totalPoints <= 5;
}, {
  message: "Los puntos totales no pueden exceder de 5",
  path: ["agility", "intellect", "strength", "vitality"]
});

const Page = () => {

  const [startAnimation, setStartAnimation] = useState(false);
  const router = useRouter();

  const handleStartGame = () => {
    setStartAnimation(true);
    setTimeout(() => {
      router.push('/create-character'); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };
  const methods = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Main className={`mobile-only py-16 h-full container max-2xl flex flex-col gap-4 items-center ${startAnimation ? 'page-animation' : ''}`}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto max-h-screen ">
          <div className="w-full">
            <Typography variant="h2">Crea tu personaje</Typography>
            <Typography variant="p">
              Para empezar con la aventura primero debes crearte tu hoja de personaje. <br />
            </Typography>
            <NameSection />
            <Typography variant="h4">Atributos del personaje</Typography>
            <Typography variant="p">
              Aqui puedes escoger tus atributos de personaje que te ayudaran en el transcurso de la historia. <br /><br />
              Puedes escoger entre los siguientes atributos para tu personaje:
              <br />
              <span className='font-semibold'> - Agilidad: </span>cada 2 puntos aumenta la probabilidad de esquivar un ataque.
              <br />
              <span className='font-semibold'>- Intelecto: </span>   cada 2 puntos aumenta el daño de tus habilidades.
              <br />
              <span className='font-semibold'>- Fuerza: </span>  cada 2 puntos aumenta el daño de tus ataques básicos.
              <br />
              <span className='font-semibold'> - Vitalidad:</span> cada 2 puntos aumenta tu vida máxima.
              <br />
            </Typography>
            <StatsSection />
            <SkillsSection />
          </div>
        </form>
      </FormProvider>
    </Main>
  );
};

export default Page;