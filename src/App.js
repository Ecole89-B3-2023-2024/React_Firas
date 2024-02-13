import './Style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import Header from './components/Header';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Vehicles from './components/Vehicles';
import Films from './components/Films';
import Starships from './components/Starships';
import { BrowserRouter, Route, Routes } from'react-router-dom';


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/" element={<People />} />
          <Route path="/planets/" element={<Planets />} />
          <Route path="/species/" element={<Species />} />
          <Route path="/films/" element={<Films />} />
          <Route path="/vehicles/" element={<Vehicles />} />
          <Route path="/starships/" element={<Starships />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
