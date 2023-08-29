import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/data.json';
import { ItemList } from './ItemList';
export const ItemListContainter = (props) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();
    

    useEffect(() =>{
        const promise = new Promise((resolve, reject) =>{
            setTimeout(() => resolve(data), 2000);
        });
        promise.then((data) => {
            if(!id) {
                setProducts(data);        
            } else { 
                const productsFiltered = data.filter(product => product.categoryId === id
                    );
                    setProducts(productsFiltered);
            }
        });
    }, []);

    return <Container className='greeting'>
        <h1>{props.greeting}</h1>
        <div className='container-productos'>
            <ItemList products={products} />
        </div>
    </Container>
   
};