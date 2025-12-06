import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function ListaSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [abierto, setAbierto] = useState(null);

  const toggle = (id) => {
    setAbierto(abierto === id ? null : id);
  }

  

  const obtenerSolicitudes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "solicitudes"));
      const lista = [];

      querySnapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });

      setSolicitudes(lista);
    } catch (error) {
      console.error("Error al cargar solicitudes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerSolicitudes();
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Solicitudes Registradas
        </h1>

        {solicitudes.length === 0 && (
          <p className="text-center text-gray-600">No hay solicitudes aún.</p>
        )}

        <ul className="space-y-4">
          {solicitudes.map((s) => (
            <li key={s.id} className="border p-5 rounded-xl bg-gray-50 shadow transition">
              {/*Encabezado*/}
            <div className="flex justify-between items-center">
              <div>
              <p><strong>Nombre:</strong> {s.nombre}</p>
              <p><strong>Tipo:</strong> {s.tipo}</p>
            </div>
            
            <button className=""
            onClick={() => toggle(s.id)}>
              {abierto === s.id ? "⬆️" : "⬇️"}
            </button>
            </div>
            {/*DETALLES DESPLEGABLES */}
            {abierto === s.id && (
            <div className="mt-4 border-t pt-4">
              <p><strong>Monto:</strong> ${s.monto}</p>
              <p><strong>Cuota:</strong> ${s.cuotaEstimada}</p>
              <p><strong>Fecha:</strong> {s.fecha}</p>
              <p><strong>Documento:</strong> {s.documento}</p>
              <p><strong>Correo:</strong> {s.correo} </p>
              <p><strong>Telefono:</strong>{s.telefono} </p>
              <p><strong>Ingresos:</strong> {s.ingresos} </p>
            </div>
            )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
