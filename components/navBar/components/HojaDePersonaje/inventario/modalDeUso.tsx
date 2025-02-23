'use client';
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import useStore, { Inventario } from '@/src/store/useStore';
import { renderIcon } from '@/lib/utils/utils';


interface ModalDeUsoProps {
    inventario: Inventario;
}

const ModalDeUso: React.FC<ModalDeUsoProps> = ({ inventario }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { removeInventario, setArmaEquipada, addVida } = useStore();
    const handleClose = () => {
        setIsOpen(false);
    }

    const handleRemove = (name: string) => {
        removeInventario(name);
        handleClose();
    }
    const handleEquip = (inventario: Inventario) => {
        if (inventario.type !== 'arma') {
            addVida(inventario.value);
            removeInventario(inventario.name);
        }
        if (inventario.type === 'arma') {
            setArmaEquipada(inventario);
        }

        handleClose();
    }
    return (
        <>
            <div onClick={() => setIsOpen(true)} className="flex flex-col items-center my-2 w-20 px-1">
                {renderIcon(inventario.svg)}
                <Typography variant='small' className=" text-xs  font-semibold">{inventario.name}</Typography>
                <Typography variant='small' className=" text-xs ">{inventario.type === "arma" ? 'Ataque' : "Curacion"} +{inventario.value}</Typography>
            </div>
            <Dialog open={isOpen} onOpenChange={handleClose}>
                <DialogContent className="w-full  p-6 pergamino-theme-1">
                    <div className="flex w-full justify-center">
                        <div className="flex flex-col items-center my-2 w-40 px-1">
                            {renderIcon(inventario.svg)}
                            <Typography variant='small' className=" text-ms  font-semibold">{inventario.name}</Typography>
                            <Typography variant='small' className=" text-ms ">{inventario.type === "arma" ? 'Ataque' : "Curacion"} +{inventario.value}</Typography>
                        </div></div>
                    <Typography className="mt-2 text-center">¿Qué deseas hacer con este objeto?</Typography>
                    <div className="flex flex-col items-center">
                        <Button variant='link' onClick={() => handleEquip(inventario)}>{inventario.type === "arma" ? 'Equipar' : "Usar"}</Button>
                        <Button variant='link' onClick={() => handleRemove(inventario.name)}>Remover</Button>
                        <Button variant="link" onClick={handleClose}>Cancelar</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>

    );
};

export default ModalDeUso;