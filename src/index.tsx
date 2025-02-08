import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Bienvenido a mi aplicación Next.js</h1>
            <p>Esta es la página de inicio.</p>
        </div>
    );
};

export default Home;