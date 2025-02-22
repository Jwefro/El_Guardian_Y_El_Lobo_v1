import React from 'react';
import useStore from '../../src/store/useStore';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Typography } from '@/components/ui/typography';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table';
import { UserRoundCog } from 'lucide-react';

const HojaDePersonaje = () => {
    const { atributo, nombre, wolfName, vida, vidaMaxima,economia } = useStore();

    const calcularPorcentajeEsquivar = (agilidad: number): number => {
        const puntosPares = Math.floor(agilidad / 2) * 2;
        return Math.floor((puntosPares / 2) * 3);
    };


    const calcularVida = (vitalidad: number): number => {
        const puntosPares = Math.floor(vitalidad / 2) * 2;
        return (puntosPares / 2) * 5;
    };
    const calcularFuerza = (fuerza: number): number => {
        const puntosPares = Math.floor(fuerza / 2) * 2;
        return puntosPares / 2;
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant='link' className="btn ">Abrir Hoja de Personaje</Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-screen flex flex-col justify-between pergamino-theme-1">
                <DialogTitle className='flex gap-4 items-center'><UserRoundCog height={35} width={35} /> Hoja de Personaje</DialogTitle>
                <div className="flex flex-col h-full">
                    <div className="flex justify-between">
                        <div className="">
                            <Typography className='font-semibold text-red-950'>Nombre</Typography>
                            <Typography className='ml-2'>{nombre}</Typography>
                        </div>
                        <div className="flex flex-col items-center">
                            <Typography className='font-semibold text-red-950'>Vida</Typography>
                            <Typography className='mt-0'>{vida}/{vidaMaxima}</Typography>
                        </div>
                    </div>
                    <Typography className='font-semibold text-red-950'>Nombre del lobo</Typography>
                    <Typography >{wolfName}</Typography>

                    <div className="">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b border-red-950">
                                    <TableHead className="w-[100px] text-red-950">Atributos</TableHead>
                                    <TableHead className="w-[100px] text-red-950">Puntos</TableHead>
                                    <TableHead className="w-[100px] text-red-950">Stats</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="border border-red-950">
                                <TableRow className="border-b border-red-950">
                                    <TableCell className="border-b border-red-950">Agilidad:</TableCell>
                                    <TableCell className="border-b border-red-950">{atributo.agilidad}</TableCell>
                                    <TableCell className="border-b border-red-950">+{calcularPorcentajeEsquivar(atributo.agilidad)}%</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-red-950">

                                    <TableCell className="border-b border-red-950">Vitalidad:</TableCell>
                                    <TableCell className="border-b border-red-950">{atributo.vitalidad}</TableCell>
                                    <TableCell className="border-b border-red-950">+{calcularVida(atributo.vitalidad)}pts</TableCell>
                                </TableRow>
                                <TableRow className="border-b border-red-950">
                                    <TableCell className="border-b border-red-950">Fuerza:</TableCell>
                                    <TableCell className="border-b border-red-950">{atributo.fuerza}</TableCell>
                                    <TableCell className="border-b border-red-950">+{calcularFuerza(atributo.fuerza)}pts</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                            </TableFooter>
                        </Table>

                    </div>
                    
                    <div className="">
                            <Typography className='font-semibold text-red-950'>Economia</Typography>
                            <Typography className='ml-2'>{economia} Coronas</Typography>
                        </div>
                </div>

                <DialogClose asChild>
                    <Button className="btn">Cerrar</Button>
                </DialogClose>
            </DialogContent>
        </Dialog >
    );
};

export default HojaDePersonaje;