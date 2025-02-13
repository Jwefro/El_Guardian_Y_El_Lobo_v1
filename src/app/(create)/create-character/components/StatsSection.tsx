import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';

const StatsSection = () => {
  const { control, watch, setValue, formState: { errors } } = useFormContext();
  const totalPoints = watch(['agility', 'intellect', 'strength', 'vitality']).reduce((acc, val) => acc + (parseInt(val) || 0), 0);

  const handleInputChange = (field, value) => {
    const intValue = parseInt(value);
    if (intValue >= 0 && intValue <= 5) {
      if (totalPoints < 5 || intValue < watch(field)){
        setValue(field, intValue);
      }
      
    }
  };

  return (
    <div>
      <p className='pb-4'>Puntos disponibles: {5 - totalPoints}</p>
      <div className="w-30 gap-1 flex flex-col">
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span>Agilidad:</span>
            <Controller
              name="agility"
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
          {errors.agility && <p>{String(errors.agility.message)}</p>}
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span>Intelecto:</span>
            <Controller
              name="intellect"
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
          {errors.intellect && <p>{String(errors.intellect.message)}</p>}
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span>Fuerza:</span>
            <Controller
              name="strength"
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
          {errors.strength && <p>{String(errors.strength.message)}</p>}
        </div>
        <div>
          <div className="flex gap-4 items-center justify-between">
            <span>Vitalidad:</span>
            <Controller
              name="vitality"
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
          {errors.vitality && <p>{String(errors.vitality.message)}</p>}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
