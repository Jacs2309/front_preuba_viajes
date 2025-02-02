import { useState } from "react";
const NuevoViaje =()=>{
    const [datosViaje, setDatosViaje] = useState({
        idV:"",
        origen: "",
        pasajeros: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosViaje({
        ...datosViaje,
        [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", datosViaje);
    
        axios
          .post("http://localhost:3030/api/viajes", datosViaje, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            console.log("Datos guardados con éxito:", response.data);
            alert("Cliente registrado con éxito");
          })
          .catch((error) => {
            console.error("Error al guardar los datos:", error);
            alert("Error al registrar el Cliente");
          });         
      };
    return(
        <main style={{ justifyContent: "center"}}>
            <section>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="idV">Numero de viaje </label>
                    <input type="number" name="idV" id="idV" placeholder="idV" value={datosViaje.idV} onChange={handleChange}/><br/><br/>

                    <label htmlFor="origen">Origen: </label>
                    <input type="text" name="origen" id="origen" placeholder="origen" value={datosViaje.origen} onChange={handleChange}/><br/><br/>

                    <label htmlFor="pasajeros">Numero de pasajeros </label>
                    <input type="number" name="pasajeros" id="pasajeros" placeholder="pasajeros" value={datosViaje.telefono} onChange={handleChange}/><br/><br/>
                  
                    <button type="submit">Subir</button>
                </form>
            </section>
        </main>
    );
}
export default NuevoViaje;