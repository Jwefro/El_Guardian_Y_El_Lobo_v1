import React from 'react';

import useStore from '@/src/store/useStore';
import ModalDeUso from './inventario/modalDeUso';
import { Typography } from '@/components/ui/typography';
import { Crown } from 'lucide-react';
import { renderIcon } from '@/lib/utils/utils';


const HojaDeInventario = () => {
    const { inventario, economia, armaEquipada } = useStore();
    return (
        <div className="">
            <div className="flex justify-between">

                <div className="">
                    <Typography className='font-semibold text-red-950'>Economia</Typography>
                    <div className="flex items-center">
                        <Crown className='text-red-950' height={20} width={20} />
                        <Typography className='ml-1'>{economia} Coronas</Typography></div>

                </div>
                <div className="flex flex-col items-center">
                    <Typography className='font-semibold text-red-950'>Equipado</Typography>
                    <div className="flex flex-col items-center justify-center my-2 w-20 px-1">
                        {renderIcon(armaEquipada?.svg)}
                        <Typography variant='small' className=" text-xs  font-semibold">{armaEquipada?.name}</Typography>
                        <Typography variant='small' className=" text-xs ">{armaEquipada !== null ? `+${armaEquipada?.value}` : null}</Typography>
                    </div>
                </div>
            </div>
            <div className="">

                <Typography className='font-semibold text-red-950'>Inventario</Typography>
                <div className="flex flex-wrap justify-center w-full gap-4 border border-orange-900 min-h-40 max-h-96">
                    {inventario.map((item, index) => (
                        <ModalDeUso key={index} inventario={item} />
                    ))}
                </div></div>

        </div>
    );
};


export default HojaDeInventario;