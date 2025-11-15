import { Link } from "react-router-dom";

export default function ProductCard({ producto }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 transition hover:shadow-xl hover:-translate-y-1 duration-200 animate-zoom-in">
      
      <div className="flex justify-center mb-4">
        <img
          src={producto.img}
          alt={producto.nombre}
          className="w-20 h-20 object-contain"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {producto.nombre}
      </h3>

      <p className="text-sm text-gray-600 mb-3">{producto.descripcion}</p>

      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p><span className="font-medium text-gray-700">Tasa:</span> {producto.tasa}</p>
        <p><span className="font-medium text-gray-700">Monto:</span> {producto.monto}</p>
        <p><span className="font-medium text-gray-700">Plazo:</span> {producto.plazo}</p>
      </div>

      <Link
        to="/simulador"
        className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Simular Crédito
      </Link>
    </div>
  );
}
