import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radioGroup';
import { Label } from '@/components/ui/label';

const SkillsSection = () => {
  const { control, formState: { errors } } = useFormContext();

  return (
    <div>
      <label>Habilidades</label>
      <Controller
        name="skill"
        control={control}
        render={({ field }) => (
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rastreo" id="rastreo" />
              <Label htmlFor="rastreo">Rastreo - Descripción breve</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sigilo" id="sigilo" />
              <Label htmlFor="sigilo">Sigilo - Descripción breve</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="maestro_en_armas" id="maestro_en_armas" />
              <Label htmlFor="maestro_en_armas">Maestro en Armas - Descripción breve</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comerciante" id="comerciante" />
              <Label htmlFor="comerciante">Comerciante - Descripción breve</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="intuicion" id="intuicion" />
              <Label htmlFor="intuicion">Intuición - Descripción breve</Label>
            </div>
          </RadioGroup>
        )}
      />
      {errors.skill && <p>{String(errors.skill.message)}</p>}
    </div>
  );
};

export default SkillsSection;