// import { handleInicio, handleProducto, handleContacto  } from '../utils/Navmenu';
import { useNavigate } from "react-router-dom"
export const Producto = () => {

    const navegate = useNavigate()
    const handleInicio = () => {
        navegate('/')
    }

    const handleProducto = () => {
        navegate('/producto')
    }

    const handleContacto = () => {
        navegate('/contacto')
    }

    return (
        <>
            <div>Producto</div>
            <button onClick={handleInicio}>Inicio</button>
            <button onClick={handleProducto}>Producto</button>
            <button onClick={handleContacto}>Contacto</button>
        </>
    )
}
