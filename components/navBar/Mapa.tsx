import React, { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription } from '@/components/ui/alert-dialog';
import { Button } from '../ui/button';
import { InnerImageZoom } from 'react-inner-image-zoom';
import { motion } from 'framer-motion';

const MapaDelReino = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant='link' onClick={() => setOpen(true)}>Mapa del Reino</Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="pergamino-theme w-screen m-0 px-0 pt-11 h-full">
          <AlertDialogDescription className=' h-full overflow-y-auto'>
            <AlertDialogTitle className='text-2xl text-red-950 pl-4'>Mapa de los tres Reinos</AlertDialogTitle>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <InnerImageZoom src="/mapa.jpg" zoomSrc="/mapa.jpg" />
            </motion.div>
            <div className="w-full flex justify-center">
              <Button variant='default' className='text-md bg-red-950 text-white w-full font-semibold mb-5 mx-2' onClick={() => setOpen(false)}>Cerrar</Button>
            </div>
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default MapaDelReino;