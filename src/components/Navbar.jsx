import { Link } from "react-router-dom";
import { Home, Calculator, FileEdit } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">

 <Link to="/"> <img
    src="/src/assets/images/logo.png"
    alt="Banco Seguro"
    className="h-15 w-30"
  />
  </Link>


        {/* Opciones */}
        <ul className="flex  gap-10 text-lg font-medium">

          <li>
            <Link
              to="/"
              className="flex-auto items-center gap-2 text-gray-700 hover:text-[#004c99] transition"
            >
              <Home size={20} strokeWidth={2} />
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/simulador"
              className="flex-auto items-center gap-2 text-gray-700 hover:text-[#004c99] transition"
            >
              <Calculator size={20} strokeWidth={2} />
              Simulador
            </Link>
          </li>

          <li>
            <Link
              to="/solicitudCredito"
              className="flex-auto items-center gap-2 text-gray-700 hover:text-[#004c99] transition"
            >
              <FileEdit size={20} strokeWidth={2} />
              Formulario
            </Link>
          </li>

          <li>
            <Link
              to="/solicitud"
              className="flex-auto items-center gap-2 text-gray-700 hover:text-[#004c99] transition"
            >
              <FileEdit size={20} strokeWidth={2} />
              Solicitudes
            </Link>
          </li>      

        </ul>

      </div>
    </nav>
  );
}

