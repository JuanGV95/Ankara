import { useContext } from 'react';
import { ItemCount } from './ItemCount';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({product}) => {
    const { addItem } = useContext(CartContext)
    
    const onAdd = count => addItem(product, count)
    return (
    <div className='contenedor-detalle-item'>
            <img src={require(`../assets/img/${product.pictureUrl}`)} className='img-detalle-item' alt="foto" />
            <section className='detalles-item'>
            <h1>{product.title}</h1>
            <p className='detalle-item-p'>{product.description}</p>
            <h2>${product.price} USD</h2>
            <p className='detalle-item-p'>Stock: {product.stock}</p>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            </section>
        </div>
    )
    };