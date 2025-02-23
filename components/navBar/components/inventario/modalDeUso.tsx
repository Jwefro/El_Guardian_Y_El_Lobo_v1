'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTitle, } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import useStore, { Inventario } from '@/src/store/useStore';
import { renderIcon } from '@/lib/utils/utils';


interface ModalDeUsoProps {
    inventario: Inventario;
}

const ModalDeUso: React.FC<ModalDeUsoProps> = ({ inventario }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const { removeInventario, setArmaEquipada,addVida } = useStore();
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
            return;
        }
        if (inventario.type === 'arma') {
            setArmaEquipada(inventario);
            return;
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
                <DialogContent className="w-full  p-6">
                    <DialogTitle>Usar {inventario.name}</DialogTitle>
                    <Typography className="mt-2 text-center">¿Qué deseas hacer con este objeto?</Typography>
                    <div className="mt-4 flex flex-col items-center gap-4">
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