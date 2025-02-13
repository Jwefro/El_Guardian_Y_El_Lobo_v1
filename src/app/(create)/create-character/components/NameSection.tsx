import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';

const NameSection = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <div>
        <label>Nombre del Personaje</label>
        <Controller
          name="characterName"
          control={control}
          render={({ field }) => <Input className='border-brown-200' {...field} />}
        />
        {errors.characterName && <p>{String(errors.characterName.message)}</p>}
      </div>
      <div>
        <label>Nombre del Lobo</label>
        <Controller
          name="wolfName"
          control={control}
          render={({ field }) => <Input className='border-brown-200' {...field} />}
        />
        {errors.wolfName && <p>{String(errors.wolfName.message)}</p>}
      </div>
    </div>
  );
};

export default NameSection;