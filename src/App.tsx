import Header from "./componentes/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./componentes/Paginas/Home";
import { useState } from "react";

function Admin() {
  return <h2>Página de Administração</h2>;
}

export default function App() {
    const [busca, setBusca] = useState(''); // Estado compartilhado
  return (
    <>
      <Header busca={busca} setBusca={setBusca}  />

      <Routes>
        <Route path="/" element={<Home busca = {busca} />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
