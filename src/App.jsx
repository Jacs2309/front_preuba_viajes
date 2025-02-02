import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar.jsx"
import Inicio from "./components/Inicio.jsx";
import NuevoViaje from "./components/NuevoViaje.jsx";
import ListarV from "./components/ListViajes.jsx";
import UpdateViaje from "./components/UpdateV.jsx";
import "./App.css";

function App() {


  return (
    <>
    <BrowserRouter>
      <header>
        <h2>Transportes JC</h2>
        <h3>Lo mejor para organizar viajes </h3>
        <Nav/>
      </header>
      <Routes>
        <Route path="/viajes/home" element = {<Inicio/>}/>
        <Route path="/viajes/insertar" element={ <NuevoViaje/>}/>
        <Route path="/viajes/listar" element = {<ListarV/>}/>
        <Route path="/viajes/update/:id" element = {<UpdateViaje/>}/>
      </Routes>
      <footer>
        Derechos Reservados &copy; 2024-2030 
      </footer>
    </BrowserRouter>
    </>
  )
}

export default App
