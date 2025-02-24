'use client';
import Main from '@/components/layout/Main';
import React, { useState, } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/typography';
import useStore from '@/src/store/useStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
const Page = () => {

    const [startAnimation, setStartAnimation] = useState(false);
    const router = useRouter();
    const { wolfName, setCurrentPage } = useStore();

    const variantsTwo = {
        hidden: { opacity: 0, x: 0 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.9,
                duration: 0.9,
            },
        }),
    };

    const handlePage = () => {
        setStartAnimation(true);
        setCurrentPage('/prologo/2');
        setTimeout(() => {
            router.push('/prologo/2'); // Redirige a la página del juego después de la animación
        }, 500); // Duración de la animación en milisegundos
    };

    return (
        <Main className={`mobile-only py-16 mb-12 h-full container max-2xl flex flex-col gap-4 overflow-y-auto items-center ${startAnimation ? 'page-animation' : ''}`}>
            <AnimatePresence>
                <div className='w-full  max-h-screen mb-16 pb-12'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={variantsTwo}
                        custom={0}
                        transition={{ duration: 2 }}
                        className='w-full h-2/4 flex flex-col justify-end items-center'
                    >
                        <div className="">
                            <Typography variant='p' className=''>
                                En el borde de esta apacible aldea, rodeada por un denso bosque y un río cristalino,
                                había una modesta cabaña. Aquí es donde vives, un joven aldeano.
                                Aunque pocos conocían tu verdadero nombre,
                                todos en la aldea te reconocían por tu leal mascota, <span className='text-red-950'>{wolfName}</span>,
                                un lobo de imponente figura y aura mística. <span className='text-red-950'>{wolfName}</span> no era un lobo común.
                                Sus ojos, de un profundo azul celeste, reflejaban una inteligencia
                                y nobleza que sobrepasaba la de cualquier animal.
                            </Typography>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={variantsTwo}
                        custom={1}
                        transition={{ duration: 2 }}
                        className='w-full h-2/4 flex flex-col justify-end items-center'
                    >
                        <div className="pt-6">
                            <Button onClick={handlePage} className="w-full bg-red-950 text-white">
                                Continuar
                            </Button>
                        </div>
                    </motion.div >
                </div>
            </AnimatePresence>
        </Main>
    );
};

export default Page;