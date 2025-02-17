'use client';
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Settings } from 'lucide-react';
import HojaDePersonaje from './HojaDePersonaje';
import MapaDelReino from './Mapa';

const OpcionesModal: React.FC = () => {
  return (
    <Sheet >
      <SheetTrigger>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent className="pergamino-simple-theme min-h-56 animate-fade-in" side={'top'}>
        <SheetHeader>
          <SheetTitle className='text-start flex items-center gap-2'>
            <Settings />  Opciones
          </SheetTitle>
          <SheetDescription className='flex flex-col gap-4 flex-start'>
            <HojaDePersonaje />
            <MapaDelReino />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  );
};

export default OpcionesModal;