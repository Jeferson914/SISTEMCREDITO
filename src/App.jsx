import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

import Home from "./pages/Home";
import Simulador from "./pages/Simulador";
import Solicitar from "./pages/Solicitar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/simulador" element={<Simulador />} />
          <Route path="/solicitar" element={<Solicitar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
