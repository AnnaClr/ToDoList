import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Calendario from "../pages/Calendario";
import Eventos from "../pages/Eventos";
import Lixeira from "../pages/Lixeira";
import Temas from "../pages/Temas";
// import ToDoList from "../components/ToDoList";
import { App } from "../App";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calender" element={<Calendario />} />
        <Route path="/events" element={<Eventos />} />
        <Route path="/trash" element={<Lixeira />} />
        <Route path="/Themes" element={<Temas />} />
      </Routes>
  );
};

export default AppRoutes;
