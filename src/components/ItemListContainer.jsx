import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { ItemList } from './ItemList';
export const ItemListContainter = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
    
        const refCollection = collection(db, "ItemCollection");
    
        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) console.log("no results");
          else
            setProducts(
              snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
              })
            );
        }).finally(() => setLoading(false))
      }, [id]);

    //   .then((data) => {
    //     if(!id) {
    //         setProducts(data);        
    //     } else { 
    //         const productsFiltered = data.filter(product => product.categoryId === id);
    //             setProducts(productsFiltered);
    //     }
    // });
    if(loading) return <div>Loading...</div>

    return <Container className='greeting'>
        <h1>{props.greeting}</h1>
        <div className='container-productos'>
            <ItemList products={products} />
        </div>
    </Container>
   
};