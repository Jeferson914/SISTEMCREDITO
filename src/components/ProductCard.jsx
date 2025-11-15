import { Link } from "react-router-dom";

export default function ProductCard({ producto }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all p-8">

      {/* Icono / Imagen */}
      <div className="flex justify-center mb-5">
        <img
          src={producto.img}
          alt={producto.nombre}
          className="w-20 h-20 object-contain opacity-90"
        />
      </div>

      {/* Nombre */}
      <h3 className="text-2xl font-semibold text-[#003366] text-center mb-2">
        {producto.nombre}
      </h3>

      {/* Descripción */}
      <p className="text-center text-gray-600 mb-6">
        {producto.descripcion}
      </p>

      {/* Detalles */}
      <div className="text-sm text-gray-700 bg-gray-50 rounded-xl p-4 space-y-2 mb-6 border border-gray-100">
        <p>
          <span className="font-medium text-[#003366]">Tasa:</span> {producto.tasa}
        </p>
        <p>
          <span className="font-medium text-[#003366]">Monto:</span> {producto.monto}
        </p>
        <p>
          <span className="font-medium text-[#003366]">Plazo:</span> {producto.plazo}
        </p>
      </div>

      {/* Botón CTA */}
      <Link
        to="/simulador"
        className="block w-full text-center bg-[#003366] text-white py-3 rounded-xl font-medium hover:bg-[#004a88] transition-all shadow-md hover:shadow-lg"
      >
        Simular Crédito
      </Link>
    </div>
  );
}
