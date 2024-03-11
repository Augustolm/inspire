

import { Contacto } from './components/Contacto'
import { Producto } from './components/Producto'
import { Inicio } from './components/Inicio'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'


function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path='/' Component={Inicio} />
            <Route path='/producto' Component={Producto} />
            <Route path='/contacto' Component={Contacto} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
