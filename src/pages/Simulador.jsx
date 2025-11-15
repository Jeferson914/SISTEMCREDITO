export default function Simulador() {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto bg-white shadow-xl border border-gray-200 p-10 rounded-2xl animate-slide-up">
        
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8 animate-slide-up">
          Simulador de Crédito
        </h1>

        <div className="grid gap-6">

          {/* Monto */}
          <div className="animate-zoom-in">
            <label className="font-semibold text-gray-700">Monto solicitado</label>
            <input 
              type="number"
              className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ej: 5000"
            />
          </div>

          {/* Plazo */}
          <div className="animate-zoom-in">
            <label className="font-semibold text-gray-700">Plazo (meses)</label>
            <input 
              type="number"
              className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Ej: 12"
            />
          </div>

          {/* Botón */}
          <button
            onClick={() => alert("Formulario enviado")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow 
            hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transform transition duration-300 animate-zoom-in"
          >
            Calcular Crédito
          </button>
        </div>
      </div>
    </section>
  );
}
