import React, { useState } from 'react';

const Catalog = () => {
  // Datos de ejemplo para los productos
  const [products] = useState([
    {
      id: 1,
      name: 'Laptop Pro',
      price: 999.99,
      image: '/images/laptop.jpg',
      category: 'Laptops'
    },
    {
      id: 2,
      name: 'Smartphone X',
      price: 699.99,
      image: '/images/smartphone.jpg',
      category: 'Smartphones'
    },
    // Agrega más productos aquí
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Laptops', 'Smartphones', 'Tablets', 'Accesorios'];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nuestro Catálogo</h1>

      {/* Filtros */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button
                className="mt-2 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;