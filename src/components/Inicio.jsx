import { useState } from "react";
function Inicio() {
    const [calculo, setCalculo] = useState({
        np :"",
        dest:""
    })
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCalculo({
        ...calculo,
        [name]: value,
        });
    };
    const [costoTotal, setCostoTotal] = useState(null);
    function CalculoCosto(num) {
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
    const handleClick = () => {
        const numPasajeros = parseInt(calculo.np, 10);
        event.preventDefault();
        if (!isNaN(numPasajeros) && numPasajeros > 0) {
            setCostoTotal(CalculoCosto(numPasajeros));
        } else {
            setCostoTotal("Número de pasajeros inválido");
        }
    };
    return (
        <>
        <div style={{ textAlign: "center",  color:"black"}}>
            <p>Bienvendio a viajes NJ la mejor solucion para sus viajes.<br/>
            Las tarifas de nuestros vaijes varían en funcion del numero de pasajeros.<br/>
            Puede calcular el costo para su viaje acontuniacion.</p>
        </div>
        <main>
            <section>
                <form className="info" onSubmit={handleClick} >
                    <p>Introduzca el numero de Pasajeros <input type="number" name="np" value={calculo.np} onChange={handleChange}/></p>
                    <p>Introduzcal el lugar de destino <input type="text" name="dest" value={calculo.dest} onChange={handleChange}/></p>
                    <input className="boton" type="submit" value="Calcular" onClick={handleClick}/>
                </form>
	    	</section>
            <aside>
                <h3>El costo total para {calculo.np} a {calculo.dest}</h3><br/>
                <h3>Es: ${costoTotal}</h3>
            </aside>
        </main>
        </>
        
    );
}
export default Inicio;