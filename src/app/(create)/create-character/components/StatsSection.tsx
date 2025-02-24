import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

const StatsSection = () => {
  const { control, watch, setValue, formState: { errors } } = useFormContext();
  const totalPoints = watch(['agilidad', 'fuerza', 'vitalidad']).reduce((acc, val) => acc + (parseInt(val) || 0), 0);

  const handleInputChange = (field, value) => {
    const intValue = parseInt(value);
    if (intValue >= 0 && intValue <= 5) {
      if (totalPoints <= 5 || intValue < watch(field)) {
        setValue(field, intValue);
      }
      setValue(field, watch(field));
    }
  };

  return (
    <div className='mb-8'>
      <Typography variant="h4"  className='text-red-950'>Atributos del personaje</Typography>
      <Typography variant="small">
        Aqui puedes escoger tus atributos de personaje que te ayudaran en el transcurso de la historia.
        <br />
        <br />
        <span className='font-semibold text-red-950'> - Agilidad: </span>cada 2 puntos aumenta la probabilidad de esquivar un ataque.
        <br />
        <span className='font-semibold text-red-950'>- Fuerza: </span>  cada 2 puntos aumenta el daño de tus ataques básicos.
        <br />
        <span className='font-semibold text-red-950'> - Vitalidad:</span> cada 2 puntos aumenta tu vida máxima.
        <br />
      </Typography>
      <Typography className='py-4 '>Puntos disponibles: {5 - totalPoints}</Typography>
      <div className="w-30 gap-1 flex flex-col">
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span  className='text-red-950 font-semibold text-sm'>Agilidad:</span>
            <Controller
              name="agilidad"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  className='w-20'
                  min={0}
                  max={5}
                  
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
            />
          </div>
          {errors.agilidad && <p>{String(errors.agilidad.message)}</p>}
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span  className='text-red-950 font-semibold text-sm'>Fuerza:</span>
            <Controller
              name="fuerza"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  className='w-20'
                  min={0}
                  max={5}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
            />
          </div>
          {errors.fuerza && <p>{String(errors.fuerza.message)}</p>}
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span  className='text-red-950 font-semibold text-sm'>Vitalidad:</span>
            <Controller
              name="vitalidad"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  className='w-20'
                  min={0}
                  max={5}
                  
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
            />
          </div>
          {errors.vitalidad && <p>{String(errors.vitalidad.message)}</p>}
        </div>
      </div>
      {totalPoints > 5 && <p>Los puntos totales no pueden exceder de 5</p>}
    </div>
  );
};

export default StatsSection;
