import React from 'react';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import useStore from '@/src/store/useStore';

const HojaDeAtributos: React.FC = () => {
    const { atributo, armaEquipada } = useStore();

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
    );
};

export default HojaDeAtributos;