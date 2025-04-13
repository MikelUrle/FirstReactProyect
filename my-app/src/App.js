import { BrowserRouter, Routes, Route } from "react-router-dom";

import Saludo from './components/Saludo';
import PrimerBootstrapMoment from './components/PrimerBootstrapMoment';
import AcordeonEjemplo from './components/AcordeonEjemplo';
import PokemonTabla from './components/PokemonTabla';
import DetallePokemon from "./components/DetallePokemon";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonTabla />} />
        <Route path="/pokemon/:nombre" element={<DetallePokemon />} />
        {/* Puedes agregar más rutas si quieres mostrar otros componentes */}
        <Route path="/extras" element={
          <>
            <h1>Extras ✨</h1>
            <PrimerBootstrapMoment />
            <AcordeonEjemplo />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
