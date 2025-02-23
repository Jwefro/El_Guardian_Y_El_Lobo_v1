import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Typography } from '@/components/ui/typography';
import useStore from '@/src/store/useStore';
import habilidades from '@/lib/utils/habilidades';

const HojaDeHabilidades: React.FC = () => {
    const { skill } = useStore();

    return (
        <div className="">
            <Typography className='font-semibold text-red-950'>Habilidades</Typography>
            <div className="ml-2">
                {habilidades?.map((habilidad, index) => {
                    const habilidadEncontrada = skill.find(h => h === habilidad.nombre ? true : false);
                    return (
                        <div key={index} className="flex items-start">
                            <Checkbox defaultChecked={habilidadEncontrada ? true : false} disabled className='mt-2' />
                            <span className='ml-2 font-semibold'>{habilidad?.nombre}: <Typography variant='small' className='ml-2 font-base'>{habilidad?.descripcion}</Typography></span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HojaDeHabilidades;