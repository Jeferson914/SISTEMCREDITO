import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-[#003366] via-[#004a88] to-[#0066cc] text-white py-28 px-6 text-center relative overflow-hidden">

      {/* Brillo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Impulsa tus metas con un crédito inteligente
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-blue-100">
          Simula tu préstamo, compara opciones y solicita tu crédito con total seguridad y transparencia.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          <Link
            to="/simulador"
            className="bg-white text-[#003366] font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all"
          >
            Simular préstamo
          </Link>

          <Link
            to="/solicitar"
            className="border border-white/70 px-8 py-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[#003366] transition-all font-semibold"
          >
            Solicitar crédito
          </Link>

        </div>
      </div>
    </section>
  );
}
