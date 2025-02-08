import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
      <div className="mobile-only">
        <div>
          <h1 className="text-4xl font-bold text-white">Bienvenido a mi App</h1>
          <p className="mt-4 text-lg text-white">
            Esta es una aplicación solo para dispositivos móviles.
          </p>
        </div>
      </div>
      <div className="desktop-message">
        <div className="flex flex-col items-center justify-center  min-h- bg-gray-800 text-white">
          <h1 className="text-4xl font-bold">
            Esta aplicación solo está disponible en dispositivos móviles.
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
