import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListarV() {
    const navigate = useNavigate();
    const [viajes, setViajes] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
    axios
        .get("https://back-prueba-viajes.vercel.app/api/viajes") 
        .then((response) => {
        setViajes(response.data); 
    })
    .catch((err) => {
        console.error("Error al obtener los viajes:", err);
        setError("No se pudieron cargar los viajes.");
    });
    }, []);

    const eliminarViaje = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este viaje?")) {
          axios
            .delete(`https://back-prueba-viajes.vercel.app/api/viajes/${id}`)
            .then((response) => {
              alert("Viaje eliminado con éxito");
              // Actualizar la lista de clientes
              setClientes(clientes.filter((cliente) => cliente.id !== id));
            })
            .catch((error) => {
              console.error("Error al eliminar viaje:", error);
              alert("Error al eliminar el viaje");
            });
        }
      };
      const toUpdate = (id) => {
        navigate(`/viajes/update/${id}`);
    };

    return (
        <main style={{ justifyContent: "center"}}>
            <aside style={{ justifyItems: "center"}}>
                <h1>Lista de Viajes</h1>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {!error && viajes.length === 0 && <p>No hay viajes registrados.</p>}
                <div style={{ justifyContent: "center", display:"flex"}}>
                    <table style={{ justifyContent: "center"}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Origen</th>
                                <th>Pasajeros</th>
                                <th>Tarifa</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viajes.map((viaje) => (
                                <tr key={viaje._id}>
                                    <td>{viaje.id}</td>
                                       <td>{viaje.destino}</td>
                                    <td>{viaje.pasajeros}</td>
                                    <td>{viaje.tarifa}</td>
                                    <td>
                                        <button className="boton" onClick={() => eliminarViaje(viaje.id)}>Eliminar</button>
                                        <button className="boton" onClick={()=>toUpdate(viaje.id)}>Actualizar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </aside>
        </main>
    );
}
export default ListarV;
