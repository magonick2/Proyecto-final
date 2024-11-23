import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Tecnología de Última Generación
            </h1>
            <p className="text-lg mb-8">
              Descubre nuestra selección de productos tecnológicos de alta calidad
            </p>
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100">
              Ver Catálogo
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <img
                src="/images/tienda.jpg" 
                alt="Imagen Destacada"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;