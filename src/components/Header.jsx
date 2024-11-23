import React from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">TechStore</div>
          
          {/* Menú para Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-blue-400">Inicio</a>
            <a href="/catalogo" className="hover:text-blue-400">Catálogo</a>
            <a href="/contacto" className="hover:text-blue-400">Contacto</a>
            <a href="/nosotros" className="hover:text-blue-400">Nosotros</a>
          </div>
          
          {/* Iconos de carrito y búsqueda */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-6 h-6 cursor-pointer hover:text-blue-400" />
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-400" />
          </div>
          
          {/* Botón menú móvil */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="/" className="block hover:text-blue-400">Inicio</a>
            <a href="/catalogo" className="block hover:text-blue-400">Catálogo</a>
            <a href="/contacto" className="block hover:text-blue-400">Contacto</a>
            <a href="/nosotros" className="block hover:text-blue-400">Nosotros</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;