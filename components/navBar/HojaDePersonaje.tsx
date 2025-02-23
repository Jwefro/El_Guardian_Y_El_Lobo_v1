import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { UserRoundCog } from 'lucide-react';

import HojaDeNombres from './components/HojaDePersonaje/Nombres';
import HojaDeAtributos from './components/HojaDePersonaje/Atributos';
import HojaDeHabilidades from './components/HojaDePersonaje/Habilidades';
import HojaDeInventario from './components/HojaDePersonaje/Inventario';


const HojaDePersonaje = () => {


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='link' className="btn ">Abrir Hoja de Personaje</Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-screen flex flex-col justify-between pergamino-theme-1 py-6">
                <DialogTitle className='flex gap-4 items-center'><UserRoundCog height={35} width={35} /> Hoja de Personaje</DialogTitle>
                <div className="flex flex-col h-full overflow-y-auto gap-4 ">
                    <HojaDeNombres />
                    <HojaDeAtributos />
                    <HojaDeInventario />
                    <HojaDeHabilidades />
                </div>

                <DialogClose asChild>
                    <Button className="btn">Cerrar</Button>
                </DialogClose>
            </DialogContent>
        </Dialog >
    );
};

export default HojaDePersonaje;