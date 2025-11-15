import { productos } from "../components/Products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Hero />

      <section className="max-w-6xl mx-auto px-6 py-20">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] text-center mb-4">
          Encuentra el crédito ideal para ti
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
          Explora nuestras opciones de financiamiento diseñadas para acompañarte 
          en tus metas personales y de negocio.
        </p>

        {/* Listado de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {productos.map((producto) => (
            <ProductCard key={producto.nombre} producto={producto} />
          ))}
        </div>

      </section>
    </div>
  );
}

