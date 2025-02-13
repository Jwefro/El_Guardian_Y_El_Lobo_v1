'use client';
import React from 'react';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-12 fixed w-full bg-navbar flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md hover:bg-gray-200">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;