
import React from 'react';

import Modal from './Opciones';

const Navbar: React.FC = () => {

  return (
      <nav className="h-12 fixed w-full bg-navbar flex items-center justify-end px-4">
        <div className="flex items-center space-x-4">
          <Modal />
        </div>
      </nav>
  );
};

export default Navbar;