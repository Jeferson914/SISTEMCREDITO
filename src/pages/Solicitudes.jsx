import { useEffect, useState, useCallback } from "react";
import { collection, getDocs, query, where, orderBy, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function ListaSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estados para filtros
  const [filtroCorreo, setFiltroCorreo] = useState("");
  const [orden, setOrden] = useState("fechaDesc");
  const [filtroTipo, setFiltroTipo] = useState("");

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

      // ✔ FILTRO CORREO
      if (filtroCorreo.trim() !== "") {
        filtros.push(where("correo", ">=", filtroCorreo));
        filtros.push(where("correo", "<=", filtroCorreo + "\uf8ff"));
        filtros.push(orderBy("correo"));
      } else {
        // ✔ ORDENAMIENTO SOLO SI NO HAY FILTRO CORREO
        if (orden === "fechaDesc") filtros.push(orderBy("fecha", "desc"));
        if (orden === "fechaAsc") filtros.push(orderBy("fecha", "asc"));
        if (orden === "montoDesc") filtros.push(orderBy("monto", "desc"));
        if (orden === "montoAsc") filtros.push(orderBy("monto", "asc"));
      }

      // ✔ FILTRO TIPO
      if (filtroTipo.trim() !== "") {
        filtros.push(where("tipo", "==", filtroTipo));
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

  // Ejecutar cada vez que cambien filtros
  useEffect(() => {
    obtenerSolicitudes();
  }, [obtenerSolicitudes]);

  // Función para eliminar solicitud
  const eliminarSolicitud = async (id) => {
    try {
      await deleteDoc(doc(db, "solicitudes", id));
      setSolicitudes(solicitudes.filter((s) => s.id !== id));
    } catch (error) {
      console.error("Error al eliminar solicitud:", error);
    }
  };

  // Función para actualizar solicitud
  const actualizarSolicitud = async (id, datosActualizados) => {
    try {
      const solicitudRef = doc(db, "solicitudes", id);
      await updateDoc(solicitudRef, datosActualizados);
      setSolicitudes(solicitudes.map((s) => (s.id === id ? { ...s, ...datosActualizados } : s)));
    } catch (error) {
      console.error("Error al actualizar solicitud:", error);
    }
  };

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Solicitudes Registradas</h1>

        {/* 🔍 FILTROS */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Filtrar por correo..."
            className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500"
            value={filtroCorreo}
            onChange={(e) => setFiltroCorreo(e.target.value)}
          />

          <select
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500"
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
          >
            <option value="fechaDesc">Fecha (más reciente)</option>
            <option value="fechaAsc">Fecha (más antigua)</option>
            <option value="montoDesc">Monto (mayor a menor)</option>
            <option value="montoAsc">Monto (menor a mayor)</option>
          </select>

          <select
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500"
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
              className="border p-5 rounded-xl bg-white shadow-md transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{s.nombre}</p>
                  <p className="text-sm text-gray-600">{s.tipo}</p>
                </div>

                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full transition"
                  onClick={() => toggle(s.id)}
                >
                  {abierto === s.id ? "⬆️" : "⬇️"}
                </button>
              </div>

              {abierto === s.id && (
                <div className="mt-4 border-t pt-4 space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Monto</label>
                    <input
                      className="border p-2 rounded w-full focus:ring-2 focus:ring-green-500"
                      defaultValue={s.monto}
                      onBlur={(e) => actualizarSolicitud(s.id, { monto: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Cuota Estimada</label>
                    <input
                      className="border p-2 rounded w-full focus:ring-2 focus:ring-green-500"
                      defaultValue={s.cuotaEstimada}
                      onBlur={(e) => actualizarSolicitud(s.id, { cuotaEstimada: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fecha</label>
                    <input
                      className="border p-2 rounded w-full focus:ring-2 focus:ring-green-500"
                      defaultValue={s.fecha}
                      onBlur={(e) => actualizarSolicitud(s.id, { fecha: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Correo</label>
                    <input
                      className="border p-2 rounded w-full focus:ring-2 focus:ring-green-500"
                      defaultValue={s.correo}
                      onBlur={(e) => actualizarSolicitud(s.id, { correo: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition"
                      onClick={() => eliminarSolicitud(s.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition"
                      onClick={() => toggle(s.id)}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
