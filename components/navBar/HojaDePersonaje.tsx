import React from 'react';
import useStore, { Inventario } from '../../src/store/useStore';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Typography } from '@/components/ui/typography';
import { Button } from '../ui/button';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '../ui/table';
import { HeartPulse, PawPrint, User, UserRoundCog } from 'lucide-react'; import { Checkbox } from '../ui/checkbox';
import habilidades from '@/lib/utils/habilidades';
import InventarioSection from './components/inventario/Inventario';
import { renderIcon } from '@/lib/utils/utils';


const HojaDePersonaje = () => {
    const { atributo, nombre, wolfName, vida, vidaMaxima, economia, skill, inventario, armaEquipada } = useStore();

    console.log('aparecio', skill);



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
            <DialogContent className="w-screen h-screen flex flex-col justify-between pergamino-theme-1 py-6">
                <DialogTitle className='flex gap-4 items-center'><UserRoundCog height={35} width={35} /> Hoja de Personaje</DialogTitle>
                <div className="flex flex-col h-full overflow-y-auto gap-4 ">
                    <div className="flex justify-between">
                        <div className="">
                            <Typography className='font-semibold text-red-950'>Nombre</Typography>

                            <div className="flex items-center gap-1">
                                <User className='text-red-950' />
                                <Typography >{nombre}</Typography>

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
                            <Typography >{wolfName}</Typography>
                        </div>
                    </div>




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
                                    <TableCell className="border-b border-red-950">+{calcularFuerza(atributo.fuerza + (armaEquipada?.value ?? 0))}pts</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                            </TableFooter>
                        </Table>

                    </div>
                    <div className="flex justify-between">

                        <div className="">
                            <Typography className='font-semibold text-red-950'>Economia</Typography>
                            <Typography className='ml-2'>{economia} Coronas</Typography>
                        </div>
                        <div className="flex flex-col items-center">
                            <Typography className='font-semibold text-red-950'>Equipado</Typography>
                            <div className="flex flex-col items-center my-2 w-20 px-1">
                                {renderIcon(armaEquipada?.svg)}
                                <Typography variant='small' className=" text-xs  font-semibold">{armaEquipada?.name}</Typography>
                                <Typography variant='small' className=" text-xs ">{armaEquipada !== null ?`+${armaEquipada?.value}`: null}</Typography>
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <Typography className='font-semibold text-red-950'>Inventario</Typography>
                        <InventarioSection items={inventario as Inventario[]} />
                    </div>

                    <div className="">
                        <Typography className='font-semibold text-red-950'>Habilidades</Typography>

                        <div className="ml-2">
                            {habilidades?.map((habilidad, index) => {
                                const habilidadEncontrada = skill.find(h => h === habilidad.nombre ? true : false);
                                return (
                                    <div key={index} className="flex items-start">
                                        <Checkbox defaultChecked={habilidadEncontrada ? true : false} disabled className='mt-2' />
                                        <span className='ml-2 font-semibold'>{habilidad?.nombre}:     <Typography variant='small' className='ml-2 font-base'>{habilidad?.descripcion}</Typography></span>

                                    </div>
                                );
                            })}
                        </div>
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