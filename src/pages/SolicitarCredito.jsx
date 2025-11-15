export default function SolicitarCredito() {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6 animate-fade-in">
      <div className="max-w-3xl mx-auto bg-white shadow-xl border border-gray-200 p-10 rounded-2xl animate-slide-up">

        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8 animate-slide-up">
          Solicitar Crédito
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Completa la información requerida para enviar tu solicitud de crédito.
        </p>

        <form className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Datos personales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Nombre completo" />
              <input className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Documento" />
              <input className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Correo electrónico" />
              <input className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Teléfono" />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Información del crédito</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500">
                <option>Seleccionar tipo de crédito</option>
                <option>Libre inversión</option>
                <option>Vehículo</option>
                <option>Hipotecario</option>
              </select>

              <input className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Monto solicitado" />
              <input className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Plazo (meses)" />
              <input className="border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500" placeholder="Ingresos mensuales" />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" className="w-5 h-5 mt-1" />
            <p className="text-gray-600">Acepto los <span className="text-blue-600 underline">términos y condiciones</span></p>
          </div>

          <button
            type="button"
            onClick={() => alert("Formulario enviado")}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transform transition duration-300 active:scale-[0.98]"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
}
