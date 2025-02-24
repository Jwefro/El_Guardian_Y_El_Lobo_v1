'use client';
import Main from '@/components/layout/Main';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/typography';
import useStore from '@/src/store/useStore';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Page = () => {
    const [showText, setShowText] = useState(true);
    const [startAnimation, setStartAnimation] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const { setCurrentPage } = useStore();
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(false);
            setTimeout(() => {
                setShowContent(true);
            }, 2000); // Espera 2 segundos después de que desaparezca el prólogo
        }, 5000); // El texto del prólogo aparecerá durante 5 segundos

        return () => clearTimeout(timer);
    }, []);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
    };

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
        setCurrentPage('/prologo/1');
        setTimeout(() => {
            router.push('/prologo/1'); // Redirige a la página del juego después de la animación
        }, 500); // Duración de la animación en milisegundos
    };


    return (
        <Main className={`mobile-only py-16 mb-12 h-full container max-2xl flex flex-col gap-4 overflow-y-auto items-center ${startAnimation ? 'page-animation' : ''}`}>
            <AnimatePresence>
                {showText && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 2 }}
                        className='w-full h-2/4 flex flex-col justify-end items-center'
                    >
                        <div className="flex flex-col justify-center w-full items-center text-center mb-6">
                            <Typography variant='h2'>Prólogo</Typography>
                            <Typography variant='h1'>El Alba de la Aventura</Typography>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showContent && (
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
                                    En una tierra distante, más allá de los confines de los grandes reinos,
                                    se encontraba la aldea de SanCris-Tobal. Esta pequeña comunidad,
                                    encaramada en las laderas de una majestuosa montaña,
                                    era conocida por su serenidad y encanto rústico.
                                    Las casas de madera, construidas con esmero y habilidad,
                                    se alineaban a lo largo de estrechos caminos de piedra,
                                    creando una atmósfera de tranquilidad que era rara vez perturbada.
                                    <br />
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

                )}
            </AnimatePresence>

        </Main>
    );
};

export default Page;