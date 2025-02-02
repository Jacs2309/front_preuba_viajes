import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UpdateViaje = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    const [viaje, setViaje] = useState({
        id: "",
        destino: "",
        pasajeros: "",
        tarifa: "",
    });

    // Cargar datos del viaje
    useEffect(() => {
        axios.get(`http://localhost:3030/api/viajes/${id}`)
            .then((response) => {
                setViaje(response.data);
            })
            .catch((error) => {
                console.error("Error al cargar el viaje:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setViaje({ ...viaje, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3030/api/viajes/${id}`, viaje)
            .then(() => {
                alert("Viaje actualizado con éxito");
            })
            .catch((error) => {
                console.error("Error al actualizar el viaje:", error);
            });
    };

    return (
        <main style={{ justifyContent: "center"}}>
          <section>
            <h1>Actualizar Viaje</h1>
            <form onSubmit={handleSubmit}>
                  <label>Destino:</label>
                  <input type="text" name="destino" value={viaje.destino} onChange={handleChange} /><br/><br/>

                  <label>Pasajeros:</label>
                  <input type="number" name="pasajeros" value={viaje.pasajeros} onChange={handleChange} /><br/><br/>

                  <label>Tarifa:</label>
                  <input type="number" name="tarifa" value={viaje.tarifa} onChange={handleChange} /><br/><br/>

                  <button type="submit">Guardar Cambios</button>
            </form>
          </section>
        </main>
    );
};

export default UpdateViaje;
