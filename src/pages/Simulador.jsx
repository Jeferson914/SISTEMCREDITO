import { productos } from "../data/Products";
import ProductCard from "../components/ProductCard";

export default function Simulador() {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-10">
          Simulador de Crédito
        </h1>

        {/* CONTENEDOR FILTROS */}
        <div className="bg-white shadow-xl border border-gray-200 p-8 rounded-2xl mb-12">

          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Filtrar créditos disponibles
          </h2>

          {/* FILTROS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Buscar por nombre
              </label>
              <input
                type="text"
                placeholder="Ej: Libre Inversión"
                className="border px-4 py-3 rounded-xl w-full shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1">
                Filtrar por monto
              </label>
              <select
                className="border px-4 py-3 rounded-xl w-full shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="todos">Todos los montos</option>
                <option value="bajo">Entre $100.000 y $30.000.000</option>
                <option value="medio">Entre $30.000.001 y $100.000.000</option>
                <option value="alto">Más de $100.000.000</option>
              </select>
            </div>

          </div>
        </div>

        {/* LISTA DE PRODUCTOS / TARJETAS */}
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-800">
          Créditos Disponibles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {productos.map((producto) => (
            <ProductCard key={producto.nombre} producto={producto} />
          ))}
        </div>

      </div>
    </section>
  );
}
