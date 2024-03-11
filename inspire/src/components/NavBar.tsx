import { NavLink } from "react-router-dom"



export const NavBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex item-center justify-between ih-16">
                    <div className="flex">
                        <NavLink to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium" >Inicio</NavLink>
                        <NavLink to="/productos" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium" >Productos</NavLink>
                        <NavLink to="/contacto" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium" >Contacto</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
