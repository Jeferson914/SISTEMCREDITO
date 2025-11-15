import { productos } from "../data/Products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="animate-fade-in bg-gray-50">
      <Hero />

      <section className="max-w-6xl mx-auto p-8 mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center animate-slide-up">
          Encuentra el crédito ideal para ti
        </h2>

        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explora nuestras opciones de financiamiento diseñadas para tus metas personales o de negocio.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {productos.map((producto) => (
            <ProductCard key={producto.nombre} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
}
