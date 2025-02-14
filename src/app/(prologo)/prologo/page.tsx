'use client';
import Main from '@/components/layout/Main'
import React, { useState } from 'react'

const page = () => {
  const [startAnimation, /* setStartAnimation */] = useState(false);
    return (
        <Main className={`mobile-only py-16 h-full container max-2xl flex flex-col gap-4 items-center ${startAnimation ? 'page-animation' : ''}`}>
            <div className="">

            </div>
        </Main>
    )
}

export default page