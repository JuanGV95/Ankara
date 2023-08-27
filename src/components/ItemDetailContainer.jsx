import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/data.json';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainter = (props) => {
    const [product, setProduct] = useState(null);

    const {id} = useParams();

    useEffect(() =>{
        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => {
            const productById = data.find(product => product.id === id);
                resolve(productById)
            }, 2000);
        });
        promise.then((data) => setProduct(data));
    }, []);

    if(!product) return <div>Loading...</div>

    return ( 
    <Container className='greeting'>
        <h1>Detalle</h1>
        <ItemDetail product={product} />
    </Container>
   )
};