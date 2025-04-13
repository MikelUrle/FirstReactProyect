import { BrowserRouter, Routes, Route } from "react-router-dom";


import Saludo from './components/Saludo';
import PrimerBootstrapMoment from './components/PrimerBootstrapMoment';
import AcordeonEjemplo from './components/AcordeonEjemplo';
import PokemonTabla from './components/PokemonTabla';
import DetallePokemon from "./components/DetallePokemon";






import './App.css';



function App() {
  return (
    <div>
      <h1>Mi primera app React 🚀</h1>
      <PrimerBootstrapMoment />
      
      <AcordeonEjemplo />
      
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<PokemonTabla />} />
          <Route path="/pokemon/:nombre" element={<DetallePokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

