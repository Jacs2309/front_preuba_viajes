import React, { useState, useEffect } from "react";
import axios from "axios";

function ListarV() {
    const [viajes, setViajes] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
    axios
        .get("http://localhost:3030/api/viajes") 
        .then((response) => {
        setViajes(response.data); 
    })
    .catch((err) => {
        console.error("Error al obtener los viajes:", err);
        setError("No se pudieron cargar los viajes.");
    });
    }, []);

    return (
        <div>
            <h1>Lista de Viajes</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!error && viajes.length === 0 && <p>No hay viajes registrados.</p>}
            <ul>
        {viajes.map((viaje) => (
            <li key={viaje._id}>
                <strong>Id:</strong> {viaje.id} <br />
                <strong>Destino:</strong> {viaje.destino} <br />
                <strong>Numero de pasajeros:</strong> {viaje.pasajeros} <br />
                <strong>tarifa:</strong> {viaje.tarifa} <br /><br />

            </li>
            ))}
        </ul>
    </div>
    );
}
export default ListarV;
