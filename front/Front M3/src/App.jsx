import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import CrearTurno from "./views/CrearTurno/CrearTurno";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" || location.pathname === "/register" ? null : <NavBar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="/crearTurno" element={<CrearTurno />} />
        <Route path="/misTurnos" element={<MisTurnos />} />
      </Routes>
    </>
  );
}

export default App;
