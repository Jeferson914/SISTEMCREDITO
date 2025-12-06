import { useEffect, useState, useCallback } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function ListaSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);
  

  // Estados para filtros
  const [filtroCorreo, setFiltroCorreo] = useState("");
  const [orden, setOrden] = useState("fechaDesc");
  const [filtroTipo, setFiltroTipo] = useState("")

  const [abierto, setAbierto] = useState(null);

  const toggle = (id) => {
    setAbierto(abierto === id ? null : id);
  };

  // 🔥 Obtener solicitudes con filtros dinámicos
  const obtenerSolicitudes = useCallback(async () => {
    setLoading(true);

    try {
      let consulta = collection(db, "solicitudes");
      let filtros = [];

      // FILTRO POR CORREO (reactivo)
      if (filtroCorreo.trim() !== "") {
        filtros.push(where("correo", ">=", filtroCorreo));
        filtros.push(where("correo", "<=", filtroCorreo + "\uf8ff"));
      }

      // ORDENAMIENTO
      if (orden === "fechaDesc") {
        filtros.push(orderBy("fecha", "desc"));
      } else if (orden === "fechaAsc") {
        filtros.push(orderBy("fecha", "asc"));
      } else if (orden === "montoDesc") {
        filtros.push(orderBy("monto", "desc"));
      } else if (orden === "montoAsc") {
        filtros.push(orderBy("monto", "asc"));
      }

      //FILTRO POR TIPO
      if (filtroTipo.trim() !== ""){
        filtros.push(where("tipo", "==", filtroTipo))
      }

      const q = query(consulta, ...filtros);
      const snapshot = await getDocs(q);

      let lista = [];
      snapshot.forEach((doc) => lista.push({ id: doc.id, ...doc.data() }));

      setSolicitudes(lista);
    } catch (error) {
      console.error("Error al cargar solicitudes:", error);
    } finally {
      setLoading(false);
    }
  }, [filtroCorreo, orden, filtroTipo]);

  // Se ejecuta al cargar y cuando cambia algún filtro
  useEffect(() => {
    const delay = setTimeout(() => {
      obtenerSolicitudes();
    }, 400); // ⏳ Anti-spam de consultas

    return () => clearTimeout(delay);
  }, [obtenerSolicitudes]);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Solicitudes Registradas
        </h1>

        {/* 🔍 FILTROS */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Filtrar por correo..."
            className="border p-2 rounded w-full"
            value={filtroCorreo}
            onChange={(e) => setFiltroCorreo(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="fechaDesc">Fecha (más reciente)</option>
            <option value="fechaAsc">Fecha (más antigua)</option>
            <option value="montoDesc">Monto (mayor a menor)</option>
            <option value="montoAsc">Monto (menor a mayor)</option>
          </select>

          <select
           className="border p-2 rounded"
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
            >
            <option value="">Todos los tipos</option>
            <option value="consumo">Consumo</option>
            <option value="hipotecario">Hipotecario</option>
            <option value="vehicular">Vehicular</option>
            <option value="tarjeta">Tarjeta de Crédito</option>
          </select>
        </div>

        {solicitudes.length === 0 && (
          <p className="text-center text-gray-600">No hay solicitudes.</p>
        )}

        <ul className="space-y-4">
          {solicitudes.map((s) => (
            <li
              key={s.id}
              className="border p-5 rounded-xl bg-gray-50 shadow transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p><strong>Nombre:</strong> {s.nombre}</p>
                  <p><strong>Tipo:</strong> {s.tipo}</p>
                </div>

                <button onClick={() => toggle(s.id)}>
                  {abierto === s.id ? "⬆️" : "⬇️"}
                </button>
              </div>

              {abierto === s.id && (
                <div className="mt-4 border-t pt-4">
                  <p><strong>Monto:</strong> ${s.monto}</p>
                  <p><strong>Cuota:</strong> ${s.cuotaEstimada}</p>
                  <p><strong>Fecha:</strong> {s.fecha}</p>
                  <p><strong>Documento:</strong> {s.documento}</p>
                  <p><strong>Correo:</strong> {s.correo}</p>
                  <p><strong>Teléfono:</strong> {s.telefono}</p>
                  <p><strong>Ingresos:</strong> {s.ingresos}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
