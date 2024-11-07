import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Mi Portafolio</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Inicio</a>
            <a href="#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Sobre mí</a>
            <a href="#projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Proyectos</a>
            <a href="#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contacto</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="mobile-menu md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Inicio</a>
          <a href="#about" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Sobre mí</a>
          <a href="#projects" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Proyectos</a>
          <a href="#contact" className="block py-2 px-4 text-sm hover:bg-green-500 hover:text-white transition duration-300">Contacto</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;