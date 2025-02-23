import React from 'react';

import { Inventario } from '@/src/store/useStore';
import ModalDeUso from './modalDeUso';


const InventarioSection = ({ items }: { items: Inventario[] }) => {
    return (
        <div className="flex flex-wrap justify-center w-full gap-4 border border-orange-900 min-h-40 max-h-96">
            {items.map((item, index) => (
                <ModalDeUso key={index} inventario={item} />
            ))}
        </div>
    );
};


export default InventarioSection;