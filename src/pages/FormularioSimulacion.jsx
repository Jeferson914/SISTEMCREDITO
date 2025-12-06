import { useState } from "react";

export default function FormularioSimulacion({ productos }) {
  const [busqueda, setBusqueda] = useState("");
  const [rango, setRango] = useState("");
  const [resultados, setResultados] = useState([]);

  const rangos = [
    { id: "1", label: "Hasta $1,000", min: 0, max: 1000 },
    { id: "2", label: "$1,000 - $5,000", min: 1000, max: 5000 },
    { id: "3", label: "Más de $5,000", min: 5000, max: Infinity },
  ];

  const simular = () => {
    let filtrados = productos;

    // FILTRO por nombre
    if (busqueda.trim() !== "") {
      filtrados = filtrados.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // FILTRO por rango predefinido
    if (rango !== "") {
      const r = rangos.find((x) => x.id === rango);
      filtrados = filtrados.filter(
        (p) => p.monto >= r.min && p.monto <= r.max
      );
    }

    setResultados(filtrados);
  };

  return (
    <section className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Simulador de Crédito
      </h2>

      {/* BUSCADOR */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Buscar por nombre:</label>
        <input
          type="text"
          className="w-full border p-3 rounded-lg"
          placeholder="Ej: Crédito Rápido"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      {/* RANGOS */}
      <div className="mb-6">
        <label className="block font-semibold mb-1">Filtrar por rango:</label>
        <select
          className="w-full border p-3 rounded-lg"
          value={rango}
          onChange={(e) => setRango(e.target.value)}
        >
          <option value="">Todos</option>
          {rangos.map((r) => (
            <option key={r.id} value={r.id}>{r.label}</option>
          ))}
        </select>
      </div>

      {/* BOTÓN */}
      <button
        onClick={simular}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Buscar créditos
      </button>

      {/* RESULTADOS */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Resultados:</h3>

        {resultados.length === 0 ? (
          <p className="text-gray-600">No hay resultados.</p>
        ) : (
          <ul className="space-y-4">
            {resultados.map((p) => (
              <li
                key={p.id}
                className="border p-5 rounded-xl bg-gray-50 shadow"
              >
                <p><strong>Producto:</strong> {p.nombre}</p>
                <p><strong>Monto:</strong> ${p.monto}</p>
                <p><strong>Tasa:</strong> {p.tasa}%</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
