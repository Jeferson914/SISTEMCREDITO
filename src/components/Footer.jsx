import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">SistemCredito</h3>
          <p className="text-sm text-gray-400">Soluciones financieras rápidas, seguras y transparentes.</p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Navegación</h4>
          <ul className="text-sm space-y-1 text-gray-400">
            <Link to="/"><li>Inicio</li></Link>
            <Link to="/simulador"><li>Simulador</li></Link>
            <Link to="/solicitud "><li>Solicitud</li></Link>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Contacto</h4>
          <p className="text-sm text-gray-400">soporte@sistemcredito.com</p>
          <p className="text-sm text-gray-400">+57 300 000 0000</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SistemCredito. Todos los derechos reservados.
      </div>
    </footer>
  );
}
