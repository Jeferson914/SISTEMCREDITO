import { useState, useMemo } from "react";
import { productos } from "../components/Products";
import ProductCard from "../components/ProductCard";

export default function Simulador() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroMonto, setFiltroMonto] = useState("todos");

  // Función de filtrado
  const productosFiltrados = useMemo(() => {
    return productos.filter((p) => {
      // Buscar por nombre
      const coincideBusqueda = p.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      // Filtrar por montos
      let coincideMonto = true;

      if (filtroMonto === "bajo") {
        coincideMonto = p.monto >= 100000 && p.monto <= 30000000;
      }
      if (filtroMonto === "medio") {
        coincideMonto = p.monto > 30000000 && p.monto <= 100000000;
      }
      if (filtroMonto === "alto") {
        coincideMonto = p.monto > 100000000;
      }

      return coincideBusqueda && coincideMonto;
    });
  }, [busqueda, filtroMonto]);

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 text-center mb-10 animate-slide-up">
          Simulador de Crédito
        </h1>

        <div className="bg-white shadow-xl border border-gray-200 p-8 rounded-2xl mb-12 animate-slide-up">

          {/* Filtros */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {/* Busqueda */}
            <div>
              <label className="font-semibold text-gray-700 mb-1 block">Buscar crédito</label>
              <input
                type="text"
                placeholder="Ej: Libre inversión..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border px-4 py-3 rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition animate-zoom-in"
              />
            </div>

            {/* Monto */}
            <div>
              <label className="font-semibold text-gray-700 mb-1 block">Filtrar por monto</label>
              <select
                value={filtroMonto}
                onChange={(e) => setFiltroMonto(e.target.value)}
                className="border px-4 py-3 rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition animate-zoom-in"
              >
                <option value="todos">Todos los montos</option>
                <option value="bajo">Entre $100.000 y $30.000.000</option>
                <option value="medio">Entre $30.000.001 y $100.000.000</option>
                <option value="alto">Más de $100.000.000</option>
              </select>
            </div>

          </div>

          {/* Productos filtrados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => (
                <ProductCard key={producto.nombre} producto={producto} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-600">
                No se encontraron productos con los filtros aplicados.
              </p>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
