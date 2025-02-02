import { useState } from "react";
import axios from "axios";
const NuevoViaje =()=>{
    const [datosViaje, setDatosViaje] = useState({
        id:"",
        destino: "",
        pasajeros: "",
        tarifa:"",
    });
    function CalculoCosto(num) {
      num = parseInt(num, 10) || 0;
      let cost = 0;
      if (num < 20) {
          cost = 70;
      } else if (num >= 20 && num <= 49) {
          cost = 40;
      } else if (num >= 50 && num <= 100) {
          cost = 35;
      } else if (num > 100) {
          cost = 20;
      }
      return num * cost;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        let tarifa = datosViaje.tarifa;
        if (name === "pasajeros") {
            tarifa = CalculoCosto(value);
        }
        setDatosViaje({
        ...datosViaje,
        [name]: name === "id" || name === "pasajeros" ? Number(value) : value,
        tarifa: tarifa,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", datosViaje);

        axios
          .post("https://back-prueba-viajes.vercel.app/api/viajes", datosViaje, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            console.log("Datos guardados con éxito:", response.data);
            alert("Viaje registrado con éxito");
          })
          .catch((error) => {
            console.error("Error al guardar los datos:", error);
            alert("Error al registrar el Viaje");
          });    
            
      };

    return(
        <main style={{ justifyContent: "center"}}>
            <section>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="id">Numero de viaje </label>
                    <input type="number" name="id" id="id" placeholder="numero de viaje" value={datosViaje.id} onChange={handleChange}/><br/><br/>

                    <label htmlFor="destino">Origen: </label>
                    <input type="text" name="destino" id="destino" placeholder="destino" value={datosViaje.destino} onChange={handleChange}/><br/><br/>

                    <label htmlFor="pasajeros">Numero de pasajeros </label>
                    <input type="number" name="pasajeros" id="pasajeros" placeholder="pasajeros" value={datosViaje.pasajeros} onChange={handleChange}/><br/><br/>
                  
                    <label htmlFor="tarifa">Tarifa Calculada: </label>
                    <input type="text" name="tarifa" id="tarifa" value={datosViaje.tarifa} onChange={handleChange} disabled/><br/><br/>

                    <button type="submit">Registrar Viaje</button>
                </form>
            </section>
        </main>
    );
}
export default NuevoViaje;