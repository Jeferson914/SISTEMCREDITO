import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-600 to-blue-700 text-white py-28 px-6 text-center relative overflow-hidden">

      {/* Efecto decorativo */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Impulsa tus metas con un crédito inteligente
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-blue-100">
          Simula tu préstamo, compara opciones y solicita tu crédito con total seguridad y transparencia.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/simulador"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
          >
            Simular préstamo
          </Link>

          <Link
            to="/solicitud"
            className="border border-white px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white hover:text-blue-700 transition font-semibold"
          >
            Solicitar crédito
          </Link>
        </div>
      </div>
    </section>
  );
}
