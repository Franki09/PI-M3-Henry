import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import CrearTurno from "./views/CrearTurno/CrearTurno";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [dataFromBack, setDataFromBack] = useState(false);

  useEffect(() => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);

    if (user) setUser(user.id);

    if (!user && location.pathname !== "/" && location.pathname !== "/register") navigate("/");

    if (user && location.pathname === "/" && location.pathname === "/register") navigate("/home");
  }, [location.pathname, user, navigate]);

  return (
    <>
      <div className="app-background" />

      {!user ? (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <div className="app-content">
          <NavBar setUser={setUser} setDataFromBack={setDataFromBack} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/crearTurno" element={<CrearTurno setDataFromBack={setDataFromBack} />} />
            <Route path="/misTurnos" element={<MisTurnos userId={user} dataFromBack={{ dataFromBack, setDataFromBack }} />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
