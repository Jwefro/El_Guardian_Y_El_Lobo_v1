'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Typography } from '@/components/ui/typography';
import NameSection from './components/NameSection';
import StatsSection from './components/StatsSection';
import SkillsSection from './components/SkillsSection';
import Main from '@/components/layout/Main';
import { Button } from '@/components/ui/button';
import useStore from '../../../store/useStore';
import { useRouter } from 'next/navigation';

const schema = z.object({
  nombre: z.string().min(1, "El nombre del personaje es obligatorio"),
  wolfName: z.string().min(1, "El nombre del lobo es obligatorio"),
  sexo: z.enum(['hombre', 'mujer']),
  agilidad: z.number().min(0).max(5),
  fuerza: z.number().min(0).max(5),
  vitalidad: z.number().min(0).max(5),
  skill: z.enum(['rastreo', 'sigilo', 'maestro_en_armas', 'comerciante', 'intuicion']),
}).refine(data => {
  const totalPoints = data.agilidad + data.fuerza + data.vitalidad;
  return totalPoints <= 5;
}, {
  message: "Los puntos totales no pueden exceder de 5",
  path: ["agilidad", "fuerza", "vitalidad"]
});

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

  const onSubmit = data => {
    const { setCharacter } = useStore.getState();
    setCharacter({
      nombre: data.nombre,
      wolfName: data.wolfName,
      sexo: data.sexo,
      atributo: {
        agilidad: data.agilidad,
        fuerza: data.fuerza,
        vitalidad: data.vitalidad,
      },
      skill: data.skill,
    });
    console.log("Personaje", {
      nombre: data.nombre,
      wolfName: data.wolfName,
      sexo: data.sexo,
      atributo: {
        agilidad: data.agilidad,
        fuerza: data.fuerza,
        vitalidad: data.vitalidad,
      },
      skill: data.skill,
    });
    setStartAnimation(true);
    setTimeout(() => {
      router.push('/prologo'); // Redirige a la página del juego después de la animación
    }, 500); // Duración de la animación en milisegundos
  };

  const totalPoints = methods.watch(['agilidad', 'fuerza', 'vitalidad']).reduce((acc, val) => acc + (val || 0), 0);

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
            <StatsSection />
            <SkillsSection />
            <Button type="submit" disabled={totalPoints > 5 ? true : false} className="w-full bg-red-950 text-white mb-20">
              Crear personaje
            </Button>
          </div>
        </form>
      </FormProvider>
    </Main>
  );
};

export default Page;