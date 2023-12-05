import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Home from './pages/Home';
import PesquisaAvancada from './pages/PesquisaAvancada';
import PesquisaMunicipios from './pages/PesquisaMunicipios';
import Anomalias from './pages/Anomalias';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pesquisaAvancada" element={<PesquisaAvancada />} />
        <Route path="/pesquisaMunicipios" element={<PesquisaMunicipios />} />
        <Route path='/anomalias' element={<Anomalias />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App