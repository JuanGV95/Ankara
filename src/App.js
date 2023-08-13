import './App.css'

import { NavBar } from './components/NavBar';

import { ItemListContainter } from './components/ItemListContainer';
import { ItemCount } from './components/ItemCount';
function App() {
  return (
    <>
    <NavBar />
    <ItemListContainter greeting="Bienvenidos a lo que sera mi futuro dolor de cabeza"/>
    
    </>
  );
}

export default App;
