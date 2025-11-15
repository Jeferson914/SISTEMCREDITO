export default function SolicitarCredito() {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl border border-gray-200 p-10 rounded-2xl">

        {/* Título */}
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Solicitar Crédito
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Completa la información requerida para enviar tu solicitud de crédito.
        </p>

        {/* FORMULARIO */}
        <form className="space-y-10">

          {/* DATOS PERSONALES */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Datos personales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Nombre completo</label>
                <input
                  type="text"
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Documento</label>
                <input
                  type="text"
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ej: 123456789"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ej: correo@gmail.com"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="text"
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ej: 3001234567"
                />
              </div>
            </div>
          </div>

          {/* DATOS DEL CRÉDITO */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Información del crédito
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Tipo de crédito</label>
                <select
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Seleccionar...</option>
                  <option>Libre inversión</option>
                  <option>Educación</option>
                  <option>Vehículo</option>
                  <option>Hipotecario</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Monto solicitado</label>
                <input
                  type="number"
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ej: 20000000"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Plazo (meses)</label>
                <input
                  type="number"
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ej: 36"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Ingresos mensuales</label>
                <input
                  type="number"
                  className="border px-4 py-3 w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Ej: 3000000"
                />
              </div>
            </div>
          </div>

          {/* CONFIRMACIÓN */}
          <div className="flex items-start gap-3">
            <input type="checkbox" className="w-5 h-5 mt-1" />
            <p className="text-gray-600">
              Acepto los <span className="text-blue-600 underline cursor-pointer">términos y condiciones</span>.
            </p>
          </div>

          {/* BOTÓN */}
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Enviar solicitud
          </button>

        </form>
      </div>
    </section>
  );
}
