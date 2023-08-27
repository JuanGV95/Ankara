import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar';
import { ItemListContainter } from './components/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <ItemListContainter greeting="Bienvenidos a lo que sera mi futuro dolor de cabeza"/>
    <Routes>
      <Route path="*" element={404} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
