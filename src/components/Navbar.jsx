import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-blue-600">Banco Seguro</h1>
      <ul className="flex gap-6 text-lg">
        <li>
          <Link to="/" className="hover:text-blue-600 transition">Inicio</Link>
        </li>
        <li>
          <Link to="/simulador" className="hover:text-blue-600 transition">Simulador</Link>
        </li>
        <li>
          <Link to="/solicitar" className="hover:text-blue-600 transition">Solicitar Crédito</Link>
        </li>
      </ul>
    </nav>
  );
}
