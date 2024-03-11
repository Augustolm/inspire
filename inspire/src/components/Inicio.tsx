// import { handleInicio, handleProducto, handleContacto  } from '../utils/Navmenu';
import { useNavigate } from "react-router-dom"

export const Inicio = () => {
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
            <div>Inicio</div>
            <button onClick={handleInicio}>Inicio</button>
            <button onClick={handleProducto}>Producto</button>
            <button onClick={handleContacto}>Contacto</button>
        </>
    )
}
