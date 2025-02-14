import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';
import { Label } from '@/components/ui/label';
import { Typography } from '@/components/ui/typography';

const SkillsSection = () => {
  const { control, formState: { errors }, watch } = useFormContext();
  const skill = watch('skill');

  return (
    <div className='pb-10'>
      <label>Habilidades</label>
      <Controller
        name="skill"
        control={control}
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            <div className="">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rastreo" id="rastreo" />
                <Label htmlFor="rastreo">Rastreo:</Label>
              </div>
              {skill === 'rastreo' ? <Typography variant="small">Permite encontrar rastros de animales y personas.</Typography> : null}
            </div>
            <div className="">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sigilo" id="sigilo" />
                <Label htmlFor="sigilo">Sigilo:</Label>
              </div>
              {skill === 'sigilo' ? <Typography variant="small">Permite moverse sin ser detectado.</Typography> : null}
            </div>
            <div className="">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="maestro_en_armas" id="maestro_en_armas" />
                <Label htmlFor="maestro_en_armas">Maestro en Armas:</Label>
              </div>
              {skill === 'maestro_en_armas' ? <Typography variant="small">Aumenta la efectividad en el combate con armas.</Typography> : null}
            </div>
            <div className="">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comerciante" id="comerciante" />
                <Label htmlFor="comerciante">Comerciante:</Label>
              </div>
              {skill === 'comerciante' ? <Typography variant="small">Mejora las habilidades de negociación y comercio.</Typography> : null}
            </div>
            <div className="">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intuicion" id="intuicion" />
                <Label htmlFor="intuicion">Intuición:</Label>
              </div>
              {skill === 'intuicion' ? <Typography variant="small">Permite prever peligros y oportunidades.</Typography> : null}
            </div>
          </RadioGroup>
        )}
      />
      {errors.skill && <p>{String(errors.skill.message)}</p>}
    </div>
  );
};

export default SkillsSection;