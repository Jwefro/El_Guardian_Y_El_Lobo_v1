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
      if (totalPoints < 5 || intValue < watch(field)) {
        setValue(field, intValue);
      }

    }
  };

  return (
    <div className='mb-8'>
      <Typography variant="p">
        Aqui puedes escoger tus atributos de personaje que te ayudaran en el transcurso de la historia.
        <br />
        <br />
        <span className='font-semibold'> - Agilidad: </span>cada 2 puntos aumenta la probabilidad de esquivar un ataque.
        <br />
        <span className='font-semibold'>- Fuerza: </span>  cada 2 puntos aumenta el daño de tus ataques básicos.
        <br />
        <span className='font-semibold'> - Vitalidad:</span> cada 2 puntos aumenta tu vida máxima.
        <br />
      </Typography>
      <p className='py-4'>Puntos disponibles: {5 - totalPoints}</p>
      <div className="w-30 gap-1 flex flex-col">
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span>Agilidad:</span>
            <Controller
              name="agilidad"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  className='w-20'
                  min={0}
                  max={5}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
            />
          </div>
          {errors.agilidad && <p>{String(errors.agilidad.message)}</p>}
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span>Fuerza:</span>
            <Controller
              name="fuerza"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  className='w-20'
                  min={0}
                  max={5}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
            />
          </div>
          {errors.fuerza && <p>{String(errors.fuerza.message)}</p>}
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span>Vitalidad:</span>
            <Controller
              name="vitalidad"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  className='w-20'
                  min={0}
                  max={5}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                />
              )}
            />
          </div>
          {errors.vitalidad && <p>{String(errors.vitalidad.message)}</p>}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
