import { Link } from "react-router-dom";
const Nav = () =>{
    return (
        <nav>
            <div>
                <ul className="nav-menu">
                    <li className="nav-item">
                    <Link to={'viajes/home'}>Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'viajes/insertar'}>Ingresar un nuevo viaje</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'viajes/listar'}>lista de viajes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;