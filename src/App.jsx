import Contador from "./components/Contador"
import Frutas from "./components/Frutas"

const App = () => {

  const user = true

  const SaludoBienvenida = () =>(
    <h2 className="text-success">bienvenido</h2>
  ) 
  const SaludoDespedida = () => (
    <h2 className="text-danger">Adios</h2>
    
  )
  const frutas = ["🍌", "🍋", "🍈"]
  return (
    <div className="container">

    <Contador />




      {user ? <SaludoBienvenida/> : <SaludoDespedida/>}

      <Frutas frutasApp={frutas}/>

      <button
      className="btn btn-primary"
      onClick={() => console.log('me diste click') }
      >Dame click!</button>
      <button>No</button>

    </div>
  )
}

export default App
