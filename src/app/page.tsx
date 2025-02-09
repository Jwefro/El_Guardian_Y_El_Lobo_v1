'use client';
import React from "react";
import Main from "../../components/layout/Main";

const HomePage: React.FC = () => {

  return (
    <>
      <Main className="portada-theme w-full h-screen">
        <div className="max-w-2xl px-4">
          <div className="mobile-only ">
            <div>
              <h1 className="mt-8">Bienvenido a mi App</h1>
              <p className="mt-3 text-lg text-">
                Esta e
              </p>
            </div>
          </div>
          <div className="desktop-message">
            <div className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-4xl font-bold">
                Esta aplicación solo está disponible en dispositivos móviles.
              </h1>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default HomePage;