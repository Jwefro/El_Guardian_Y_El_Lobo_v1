import { renderIcon } from '@/lib/utils/utils';
import { Inventario } from '@/src/store/useStore';
import React from 'react';
import { Typography } from './ui/typography';

const Item = ({ inventario }: { inventario: Inventario }) => {
  return (
    <div className="flex flex-col items-center my-2 w-50 px-1">
      {renderIcon(inventario.svg, 'text-red-950 w-10 h-10')}
      <Typography variant="p" className=" text-md  font-semibold">
        {inventario.name}
      </Typography>
      <Typography variant="p" className=" text-md ">
        {inventario.type === 'arma' ? 'Ataque' : 'Curacion'} +{inventario.value}
      </Typography>
    </div>
  );
};

export default Item;
