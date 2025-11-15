export default function ProductCard({ producto }) {
  return (
    <div className="bg-white shadow-lg p-6 rounded-2xl border border-gray-200 hover:scale-[1.03] transition transform duration-300 animate-zoom-in">
      <h3 className="text-xl font-bold mb-2">{producto.nombre}</h3>
      <p className="text-gray-600 mb-4">{producto.descripcion}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
        Más información
      </button>
    </div>
  );
}
