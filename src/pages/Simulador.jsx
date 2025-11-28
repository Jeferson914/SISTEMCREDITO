import { useState, useMemo } from "react";
import { productos } from "../components/Products";
import ProductCard from "../components/ProductCard";

// Convertir montos tipo "$1.000.000 - $30.000.000" → números
function parseMonto(montoStr) {
  if (montoStr.includes("Desde")) {
    const num = Number(montoStr.replace(/[^0-9]/g, ""));
    return { min: num, max: null };
  }

  const nums = montoStr.split("-").map((v) => Number(v.replace(/[^0-9]/g, "")));
  return { min: nums[0], max: nums[1] };
}

// Convertir "12% anual" → 12
function parseTasa(tasaStr) {
  return Number(tasaStr.replace(/[^0-9.]/g, ""));
}

export default function Simulador() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroMonto, setFiltroMonto] = useState("todos");
  const [ordenTasa, setOrdenTasa] = useState("ninguno");

  const productosFiltrados = useMemo(() => {
    let filtrados = productos.filter((p) => {
      // Filtro por búsqueda
      const coincideBusqueda = p.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      // Analizar rango de montos
      const { min, max } = parseMonto(p.monto);
      let coincideMonto = true;

      if (filtroMonto === "bajo") {
        coincideMonto = min >= 100000 && (max ?? min) <= 30000000;
      }

      if (filtroMonto === "medio") {
        coincideMonto =
          (max ?? min) > 30000000 && (max ?? min) <= 100000000;
      }

      if (filtroMonto === "alto") {
        coincideMonto = (max ?? min) > 100000000;
      }

      return coincideBusqueda && coincideMonto;
    });

    // Orden por tasa
    if (ordenTasa === "asc") {
      filtrados.sort((a, b) => parseTasa(a.tasa) - parseTasa(b.tasa));
    }

    if (ordenTasa === "desc") {
      filtrados.sort((a, b) => parseTasa(b.tasa) - parseTasa(a.tasa));
    }

    return filtrados;
  }, [busqueda, filtroMonto, ordenTasa]);

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-700 text-center mb-10 animate-slide-up">
          Simulador de Crédito
        </h1>

        <div className="bg-white shadow-xl border border-gray-200 p-8 rounded-2xl mb-12 animate-slide-up">

          {/* FILTROS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

            {/* Filtro: búsqueda */}
            <div>
              <label className="font-semibold text-gray-700 mb-1 block">
                Buscar crédito
              </label>
              <input
                type="text"
                placeholder="Ej: Crédito Personal..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border px-4 py-3 rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>

            {/* Filtro: monto */}
            <div>
              <label className="font-semibold text-gray-700 mb-1 block">
                Filtrar por monto
              </label>
              <select
                value={filtroMonto}
                onChange={(e) => setFiltroMonto(e.target.value)}
                className="border px-4 py-3 rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="todos">Todos los montos</option>
                <option value="bajo">Entre $100.000 y $30.000.000</option>
                <option value="medio">Entre $30.000.001 y $100.000.000</option>
                <option value="alto">Más de $100.000.000</option>
              </select>
            </div>

            {/* Filtro: tasa */}
            <div>
              <label className="font-semibold text-gray-700 mb-1 block">
                Ordenar por tasa de interés
              </label>
              <select
                value={ordenTasa}
                onChange={(e) => setOrdenTasa(e.target.value)}
                className="border px-4 py-3 rounded-xl w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <option value="ninguno">Sin ordenar</option>
                <option value="asc">Menor a mayor</option>
                <option value="desc">Mayor a menor</option>
              </select>
            </div>

          </div>

          {/* PRODUCTOS FILTRADOS */}
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
