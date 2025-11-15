import { productos } from "../data/Products";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />

      <section className="p-8 min-h-screen">
        <h2 className="text-3xl font-semibold mb-6 text-center animate-slide-up">
          Catálogo de Créditos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <ProductCard 
              key={producto.nombre} 
              producto={producto} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
