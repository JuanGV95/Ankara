import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar';
import { ItemListContainter } from './components/ItemListContainer';
import { ItemDetailContainter } from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainter greeting="Bienvenidos a lo que sera mi futuro dolor de cabeza" />} />
          <Route path="/category/:id" element={<ItemListContainter />} />
          <Route path="/item/:id" element={<ItemDetailContainter />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
