import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Users, Building, Clock, ChevronLeft } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegación */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            <ChevronLeft size={20} />
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Somos una empresa comprometida con la excelencia y la satisfacción de nuestros clientes desde hace más de una década.
            </p>
          </div>
        </div>
      </section>

      {/* Historia y Misión */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Fundada en 2010, nuestra empresa comenzó con una visión clara: proporcionar productos de alta calidad con un servicio excepcional. A lo largo de los años, hemos crecido y evolucionado, pero nuestros valores fundamentales permanecen intactos.
              </p>
              <p className="text-gray-600">
                Hoy, nos enorgullece ser líderes en el mercado, sirviendo a miles de clientes satisfechos y manteniendo relaciones duraderas con nuestros proveedores y socios comerciales.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-gray-600 mb-4">
                Nos dedicamos a proporcionar soluciones innovadoras y productos de calidad que mejoren la vida de nuestros clientes. Nuestro compromiso con la excelencia se refleja en cada aspecto de nuestro negocio.
              </p>
              <p className="text-gray-600">
                Trabajamos continuamente para mantenernos a la vanguardia de la industria, adoptando nuevas tecnologías y mejorando nuestros procesos para servir mejor a nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video de YouTube */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Videos de nuestra tienda</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
            <iframe
              className="w-full h-[500px]"
              src="https://www.youtube.com/embed/ryLMevFlZhk?si=p1mu-UkbTLuLG3Y1"
              title="Sobre Nuestra Empresa"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compromiso con el Cliente</h3>
              <p className="text-gray-600">
                Ponemos a nuestros clientes en primer lugar, asegurando su satisfacción en cada interacción.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Building className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Superior</h3>
              <p className="text-gray-600">
                Mantenemos los más altos estándares en todos nuestros productos y servicios.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación Constante</h3>
              <p className="text-gray-600">
                Buscamos continuamente nuevas formas de mejorar y evolucionar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Ubicación</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Visítanos</h3>
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span>Av. de la Marina 2000, San Miguel 15088</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <span>+1 234 567 890</span>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span>contacto@techstore.com</span>
                </p>
              </div>
            </div>
            <div className="h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.503874075038!2d-77.08634212535121!3d-12.077618488161573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c970336b0725%3A0xae2a6f969b48786e!2sPlaza%20San%20Miguel!5e0!3m2!1ses!2sus!4v1732316451128!5m2!1ses!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a los miles de clientes satisfechos que ya probaron nuestros productos.
          </p>
          <Link
            to="/catalogo"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Ver Catálogo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;