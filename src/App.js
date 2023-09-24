import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/NavBar';
import { ItemListContainter } from './components/ItemListContainer';
import { ItemDetailContainter } from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import { Cart } from './components/Cart';



function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainter greeting="Inicio" />}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/category/:id" element={<ItemListContainter greeting="Categoria" />} />
          <Route path="/item/:id" element={<ItemDetailContainter />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
