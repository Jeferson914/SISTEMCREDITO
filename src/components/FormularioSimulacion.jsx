import { useParams } from "react-router-dom";
import { productos } from "../components/Products";

export default function FormularioSimulacion() {
  const { producto } = useParams();

  // Buscar el producto real
  const productoSeleccionado = productos.find(
    (p) => p.nombre === decodeURIComponent(producto)
  );

  if (!productoSeleccionado) {
    return <p className="text-center mt-20">Producto no encontrado.</p>;
  }

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Simulando: {productoSeleccionado.nombre}
      </h1>

      {/* Formulario */}
      <div className="bg-white p-8 rounded-2xl border shadow-lg">
        <p className="mb-4 text-gray-700">{productoSeleccionado.descripcion}</p>

        {/* Aquí irán los inputs para monto, plazo, cálculo de cuota, etc */}
      </div>
    </section>
  );
}
