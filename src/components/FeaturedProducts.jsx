import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Laptop Pro X",
      price: "1299.99",
      description: "Potente laptop para profesionales",
      image: "/images/laptop.jpg" 
    },
    {
      id: 2,
      name: "Smartphone Ultra",
      price: "899.99",
      description: "El último en tecnología móvil",
      image: "/images/smartphone.jpg"
    },
    {
      id: 3,
      name: "Laptop asus xtrix rg15",
      price: "1800.99",
      description: "Perfecta para creativos",
      image: "/images/gamer.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Productos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
