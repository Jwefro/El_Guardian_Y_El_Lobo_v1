import React from 'react';
import useStore from '../../src/store/useStore';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Typography } from '@/components/ui/typography';
import { Button } from '../ui/button';

const HojaDePersonaje = () => {
    const { atributo, nombre, wolfName, } = useStore();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='link' className="btn ">Abrir Hoja de Personaje</Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-screen">
                <DialogTitle>Hoja de Personaje</DialogTitle>
                <DialogDescription>
                    Aquí puedes ver los datos de tu personaje.
                </DialogDescription>
                <div className="flex flex-col space-y-4">
                    <Typography variant="h4">Nombre:</Typography>
                    <Typography variant="p">{nombre}</Typography>

                    <Typography variant="h4">Nombre del lobo:</Typography>
                    <Typography variant="p">{wolfName}</Typography>

                    <Typography variant="h4">atributo:</Typography>
                    <Typography variant="p">{atributo.agilidad}</Typography>
                    <Typography variant="p">{atributo.fuerza}</Typography>
                    <Typography variant="p">{atributo.vitalidad}</Typography>
                </div>
                <DialogClose asChild>
                    <Button className="btn">Cerrar</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    );
};

export default HojaDePersonaje;