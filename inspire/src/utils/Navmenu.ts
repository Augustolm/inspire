import { useNavigate } from "react-router-dom"

const navegate = useNavigate()
export const handleInicio = () => {
    navegate('/')
}

export const handleProducto = () => {
    navegate('/producto')
}

export const handleContacto = () => {
    navegate('/contacto')
}
