import { productos } from "../data/Products";
import ProductCard from "../components/ProductCard";

export default function Simulador() {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 text-center mb-10 animate-slide-up">
          Simulador de Crédito
        </h1>

        <div className="bg-white shadow-xl border border-gray-200 p-8 rounded-2xl mb-12 animate-slide-up">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="font-semibold text-gray-700 mb-1 block">Buscar crédito</label>
              <input
                type="text"
                placeholder="Ej: Libre inversión..."
                className="border px-4 py-3 rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition animate-zoom-in"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 mb-1 block">Filtrar por monto</label>
              <select className="border px-4 py-3 rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition animate-zoom-in">
                <option value="todos">Todos los montos</option>
                <option value="bajo">Entre $100.000 y $30.000.000</option>
                <option value="medio">Entre $30.000.001 y $100.000.000</option>
                <option value="alto">Más de $100.000.000</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productos.map((producto) => (
              <ProductCard key={producto.nombre} producto={producto} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
