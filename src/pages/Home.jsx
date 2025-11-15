import { productos } from "../data/Products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="p-8 min-h-screen">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Catálogo de Créditos
        </h2>

        {/* Tarjetas más anchas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {productos.map((producto) => (
            <ProductCard key={producto.nombre} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
}
