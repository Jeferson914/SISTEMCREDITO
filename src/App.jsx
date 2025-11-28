import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SolicitarCredito from "./pages/SolicitarCredito";
import Navbar from "./components/Navbar";
import Simulador from "./pages/Simulador";
import FormularioSimulacion from "./pages/FormularioSimulacion";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        
        {/* Header */}
        <Navbar />

        {/* Contenido principal */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulador" element={<Simulador />} />
            <Route path="/solicitud" element={<SolicitarCredito />} />
            <Route path="/simulador/:producto" element={<FormularioSimulacion />} />

          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
