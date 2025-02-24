import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';
import { Label } from '@/components/ui/label';
import { Typography } from '@/components/ui/typography';

const NameSection = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div className='mb-8'>
       <Typography variant="h2">Crea tu personaje</Typography>
            <Typography variant="small" className='py-4'>
              Para empezar con la aventura primero debes crearte tu hoja de personaje. <br />
              <br />
            </Typography>
      <div>
        <label className='text-red-950 text-sm font-semibold'>Nombre del Personaje</label>
        <Controller
          name="nombre"
          control={control}
          render={({ field }) => <Input className='border-brown-200' {...field} />}
        />
        {errors.characterName && <p>{String(errors.characterName.message)}</p>}
      </div>
      <div className='my-4'>
        <label  className='text-red-950 text-sm font-semibold'>Tu personaje es ?</label>
        <Controller
          name="sexo"
          control={control}
          render={({ field }) => (
            <RadioGroup value={field.value} onValueChange={field.onChange}>
              <div className="flex items-center space-x-2 mb-1 my-4">
                <RadioGroupItem value="hombre" id="hombre" />
                <Label htmlFor="hombre">Hombre</Label>
              </div>
              <div className="flex items-center space-x-2 ">
                <RadioGroupItem value="mujer" id="mujer" />
                <Label htmlFor="mujer">Mujer</Label>
              </div>
            </RadioGroup>
          )}
        />
        {errors.skill && <p>{String(errors.skill.message)}</p>}
      </div>
      <div>
        <label  className='text-red-950 text-sm font-semibold'>Nombre del Lobo</label>
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