import { useState } from "react";

export default function SolicitarCredito() {
  const [form, setForm] = useState({
    nombre: "",
    documento: "",
    correo: "",
    telefono: "",
    tipo: "",
    monto: "",
    plazo: "",
    ingresos: "",
    acepta: false,
  });

  const [errors, setErrors] = useState({});
  const [solicitudes, setSolicitudes] = useState([]);
  const [cuota, setCuota] = useState(null);
  const [success, setSuccess] = useState("");

  // Tasas simuladas por tipo de crédito
  const tasas = {
    "Libre inversión": 0.018, // 1.8% mensual
    Vehículo: 0.012,
    Hipotecario: 0.009,
  };

  // ⭐ VALIDACIÓN EN TIEMPO REAL
  const validate = (name, value) => {
    let msg = "";

    if (!value) msg = "Este campo es obligatorio.";
    if (name === "correo" && value && !/\S+@\S+\.\S+/.test(value))
      msg = "Correo no válido.";
    if (
      ["monto", "plazo", "ingresos"].includes(name) &&
      value &&
      isNaN(value)
    )
      msg = "Debe ser un número válido.";

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  // ⭐ MANEJO DE CAMBIOS
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [name]: val }));
    validate(name, val);

    // Recalcular cuota cuando cambien monto o plazo
    if (name === "monto" || name === "plazo" || name === "tipo") {
      calcularCuota({
        ...form,
        [name]: val,
      });
    }
  };

  // ⭐ CÁLCULO REAL DE CUOTA (Fórmula de préstamo francés)
  const calcularCuota = (data) => {
    const tasa = tasas[data.tipo];
    if (!tasa || !data.monto || !data.plazo) {
      setCuota(null);
      return;
    }

    const P = Number(data.monto);
    const i = tasa;
    const n = Number(data.plazo);

    const cuotaMensual = (P * i) / (1 - Math.pow(1 + i, -n));

    setCuota(cuotaMensual.toFixed(2));
  };

  // ⭐ VALIDACIÓN COMPLETA ANTES DE ENVIAR
  const isValidForm = () => {
    for (let key in form) {
      if (!form[key] && key !== "acepta") return false;
    }
    if (!form.acepta) return false;
    if (Object.values(errors).some((e) => e)) return false;
    return true;
  };

  // ⭐ ENVIAR FORMULARIO
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidForm()) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const nuevaSolicitud = {
      ...form,
      cuotaEstimada: cuota,
      fecha: new Date().toLocaleString(),
    };

    setSolicitudes((prev) => [...prev, nuevaSolicitud]);

    setSuccess("Solicitud enviada exitosamente ✔");

    // Limpiar formulario
    setForm({
      nombre: "",
      documento: "",
      correo: "",
      telefono: "",
      tipo: "",
      monto: "",
      plazo: "",
      ingresos: "",
      acepta: false,
    });

    setCuota(null);

    setTimeout(() => setSuccess(""), 4000);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl border border-gray-200 p-10 rounded-2xl">

        <h1 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Solicitar Crédito
        </h1>

        {success && (
          <p className="text-green-600 text-center mb-6 font-semibold">
            {success}
          </p>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* DATOS PERSONALES */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Datos personales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nombre */}
              <div>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  className="border w-full px-4 py-3 rounded-xl"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-sm">{errors.nombre}</p>
                )}
              </div>

              {/* Documento */}
              <div>
                <input
                  name="documento"
                  value={form.documento}
                  onChange={handleChange}
                  placeholder="Documento"
                  className="border w-full px-4 py-3 rounded-xl"
                />
                {errors.documento && (
                  <p className="text-red-500 text-sm">{errors.documento}</p>
                )}
              </div>

              {/* Correo */}
              <div>
                <input
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  className="border w-full px-4 py-3 rounded-xl"
                />
                {errors.correo && (
                  <p className="text-red-500 text-sm">{errors.correo}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <input
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="border w-full px-4 py-3 rounded-xl"
                />
                {errors.telefono && (
                  <p className="text-red-500 text-sm">{errors.telefono}</p>
                )}
              </div>
            </div>
          </div>

          {/* INFORMACIÓN DEL CRÉDITO */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Información del crédito
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tipo */}
              <div>
                <select
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  className="border w-full px-4 py-3 rounded-xl"
                >
                  <option value="">Seleccionar tipo de crédito</option>
                  <option>Libre inversión</option>
                  <option>Vehículo</option>
                  <option>Hipotecario</option>
                </select>
                {errors.tipo && (
                  <p className="text-red-500 text-sm">{errors.tipo}</p>
                )}
              </div>

              {/* Monto */}
              <div>
                <input
                  name="monto"
                  value={form.monto}
                  onChange={handleChange}
                  placeholder="Monto solicitado"
                  className="border w-full px-4 py-3 rounded-xl"
                />
                {errors.monto && (
                  <p className="text-red-500 text-sm">{errors.monto}</p>
                )}
              </div>

              {/* Plazo */}
              <div>
                <input
                  name="plazo"
                  value={form.plazo}
                  onChange={handleChange}
                  placeholder="Plazo (meses)"
                  className="border w-full px-4 py-3 rounded-xl"
                />
                {errors.plazo && (
                  <p className="text-red-500 text-sm">{errors.plazo}</p>
                )}
              </div>

              {/* Ingresos */}
              <div>
                <input
                  name="ingresos"
                  value={form.ingresos}
                  onChange={handleChange}
                  placeholder="Ingresos mensuales"
                  className="border w-full px-4 py-3 rounded-xl"
                />
                {errors.ingresos && (
                  <p className="text-red-500 text-sm">{errors.ingresos}</p>
                )}
              </div>
            </div>
          </div>

          {/* CUOTA ESTIMADA */}
          {cuota && (
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-blue-700">
              <p className="font-semibold">
                💰 Cuota mensual estimada: ${cuota}
              </p>
            </div>
          )}

          {/* Aceptar términos */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="acepta"
              checked={form.acepta}
              onChange={handleChange}
              className="w-5 h-5 mt-1"
            />
            <p className="text-gray-600">
              Acepto los{" "}
              <span className="text-blue-600 underline">
                términos y condiciones
              </span>
            </p>
          </div>

          {/* Botón ENVIAR */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Enviar solicitud
          </button>
        </form>

        {/* RESUMEN DE SOLICITUDES EN MEMORIA */}
        {solicitudes.length > 0 && (
          <div className="mt-10 p-6 bg-gray-50 border rounded-xl">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Solicitudes enviadas (solo en memoria)
            </h3>

            <ul className="space-y-3">
              {solicitudes.map((s, i) => (
                <li key={i} className="p-4 bg-white rounded-xl shadow">
                  <p>
                    <strong>{s.nombre}</strong> — {s.tipo} — ${s.monto}
                  </p>
                  <p>Cuota estimada: ${s.cuotaEstimada}</p>
                  <p className="text-gray-500 text-sm">{s.fecha}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
