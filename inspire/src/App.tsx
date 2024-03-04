import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sumar = () => setCount(count +1)
  const restar = () => setCount(count - 1)
  const resetear = () => setCount(0)


  return (
    <>
      <h1>Mi primera Rama: </h1>
      <button onClick={sumar} >Suma</button>
      <button onClick={restar} >Restar</button>
      <button onClick={resetear} >Resetear</button>

      <p>{count}</p>
    </>
  )
}

export default App
