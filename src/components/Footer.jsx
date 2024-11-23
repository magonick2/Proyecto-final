import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechStore</h3>
            <p className="text-gray-400">
              Tu tienda de confianza para productos tecnológicos
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="/catalogo" className="text-gray-400 hover:text-white">Catálogo</a></li>
              <li><a href="/contacto" className="text-gray-400 hover:text-white">Contacto</a></li>
              <li><a href="/nosotros" className="text-gray-400 hover:text-white">Nosotros</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@techstore.com</li>
              <li>Teléfono: (01) 123-4567</li>
              <li>Dirección: Av. Principal 123</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {/* Aquí irían los íconos de redes sociales */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 TechStore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;