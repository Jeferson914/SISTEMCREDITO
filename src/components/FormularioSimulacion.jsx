import { useParams } from "react-router-dom";
import { useState } from "react";
import { productos } from "../components/Products";

// Fórmula de cuota (sistema francés)
function calcularCuota(monto, tasaAnual, plazoMeses) {
  const i = tasaAnual / 100 / 12; // tasa mensual
  if (i === 0) return monto / plazoMeses;
  return (monto * i) / (1 - Math.pow(1 + i, -plazoMeses));
}

export default function FormularioSimulacion() {
  const { producto } = useParams();

  const productoSeleccionado = productos.find(
    (p) => p.nombre === decodeURIComponent(producto)
  );

  // ================================
  // ESTADOS DEL FORMULARIO
  // ================================
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState("");
  const [correo, setCorreo] = useState("");
  const [monto, setMonto] = useState("");
  const [plazo, setPlazo] = useState("");

  const [errores, setErrores] = useState({});
  const [solicitudes, setSolicitudes] = useState([]);
  const [exito, setExito] = useState(false);

  if (!productoSeleccionado) {
    return <p className="text-center mt-20">Producto no encontrado.</p>;
  }

  // ================================
  // VALIDACIONES EN TIEMPO REAL
  // ================================
  const validar = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio";
    if (!cedula.trim()) nuevosErrores.cedula = "La cédula es obligatoria";
    if (!correo.includes("@")) nuevosErrores.correo = "Correo inválido";

    const montoNum = Number(monto);
    if (isNaN(montoNum) || montoNum <= 0)
      nuevosErrores.monto = "Monto inválido";

    const plazoNum = Number(plazo);
    if (isNaN(plazoNum) || plazoNum <= 0)
      nuevosErrores.plazo = "Plazo inválido";

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  // ================================
  // CALCULAR CUOTA AUTOMÁTICA
  // ================================
  const tasaNumerica = Number(
    productoSeleccionado.tasa.replace(/[^0-9.]/g, "")
  );

  const cuota =
    monto && plazo
      ? calcularCuota(Number(monto), tasaNumerica, Number(plazo))
      : 0;

  // ================================
  // ENVIAR FORMULARIO
  // ================================
  const enviar = (e) => {
    e.preventDefault();

    if (!validar()) return;

    const nuevaSolicitud = {
      nombre,
      cedula,
      correo,
      monto,
      plazo,
      cuota,
      producto: productoSeleccionado.nombre,
      fecha: new Date().toLocaleString(),
    };

    // Guardar en memoria
    setSolicitudes([...solicitudes, nuevaSolicitud]);

    // Mensaje de éxito
    setExito(true);

    // Limpiar formulario
    setNombre("");
    setCedula("");
    setCorreo("");
    setMonto("");
    setPlazo("");

    // Quitar mensaje de éxito después de 3s
    setTimeout(() => setExito(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-xl border rounded-2xl p-10">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Solicitar Crédito: {productoSeleccionado.nombre}
        </h1>

        {/* Mensaje de éxito */}
        {exito && (
          <div className="mb-6 bg-green-100 text-green-700 py-3 px-4 rounded-xl">
            ✔ ¡Solicitud enviada exitosamente!
          </div>
        )}

        {/* FORMULARIO */}
        <form onSubmit={enviar} className="space-y-6">

          <div>
            <label className="font-medium">Nombre completo</label>
            <input
              type="text"
              className="w-full border rounded-xl px-4 py-3 mt-1"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && <p className="text-red-600 text-sm">{errores.nombre}</p>}
          </div>

          <div>
            <label className="font-medium">Cédula</label>
            <input
              type="text"
              className="w-full border rounded-xl px-4 py-3 mt-1"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
            {errores.cedula && <p className="text-red-600 text-sm">{errores.cedula}</p>}
          </div>

          <div>
            <label className="font-medium">Correo electrónico</label>
            <input
              type="email"
              className="w-full border rounded-xl px-4 py-3 mt-1"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            {errores.correo && <p className="text-red-600 text-sm">{errores.correo}</p>}
          </div>

          <div>
            <label className="font-medium">Monto solicitado</label>
            <input
              type="number"
              className="w-full border rounded-xl px-4 py-3 mt-1"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
            {errores.monto && <p className="text-red-600 text-sm">{errores.monto}</p>}
          </div>

          <div>
            <label className="font-medium">Plazo (meses)</label>
            <input
              type="number"
              className="w-full border rounded-xl px-4 py-3 mt-1"
              value={plazo}
              onChange={(e) => setPlazo(e.target.value)}
            />
            {errores.plazo && <p className="text-red-600 text-sm">{errores.plazo}</p>}
          </div>

          {/* RESUMEN DINÁMICO */}
          {(monto && plazo) && (
            <div className="bg-gray-50 border rounded-xl p-4 mt-4">
              <h3 className="font-semibold text-blue-700 mb-2">Resumen estimado</h3>
              <p><strong>Cuota mensual:</strong> ${cuota.toLocaleString()}</p>
              <p><strong>Tasa:</strong> {productoSeleccionado.tasa}</p>
              <p><strong>Plazo:</strong> {plazo} meses</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-medium shadow-md"
          >
            Enviar solicitud
          </button>

        </form>

      </div>
    </section>
  );
}
