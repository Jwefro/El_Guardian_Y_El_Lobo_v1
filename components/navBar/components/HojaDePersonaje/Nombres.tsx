import React from 'react';
import { Typography } from '@/components/ui/typography';
import { User, PawPrint, HeartPulse } from 'lucide-react';
import useStore from '@/src/store/useStore';

const HojaDeNombres: React.FC = () => {
    const { nombre, wolfName, vida, vidaMaxima } = useStore();

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <div className="">
                    <Typography className='font-semibold text-red-950'>Nombre</Typography>
                    <div className="flex items-center gap-1">
                        <User className='text-red-950' />
                        <Typography>{nombre}</Typography>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <HeartPulse className='text-red-950' />
                    <Typography className='mt-0'>{vida}/{vidaMaxima}</Typography>
                </div>
            </div>
            <div className="">
                <Typography className='font-semibold text-red-950'>Nombre del lobo</Typography>
                <div className="flex items-center gap-1">
                    <PawPrint className='text-red-950' />
                    <Typography>{wolfName}</Typography>
                </div>
            </div>
        </div>
    );
};

export default HojaDeNombres;