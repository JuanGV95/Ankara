import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import data from '../data/data.json';
import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';

export const ItemListContainter = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => resolve(data), 2000);
        });
        promise.then((data) => setProducts(data));
    }, []);

    return <Container className='greeting'>
        <h1>{props.greeting}</h1>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <ItemList products={products} />
        </div>
     <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantida agregada', quantity)}/>
    </Container>
   
};