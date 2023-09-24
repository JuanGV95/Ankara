import { useState, useEffect } from 'react';
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { ItemList } from './ItemList';
export const ItemListContainter = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
    
        const refCollection = id ? query(collection(db, "ItemCollection"), where("categoryId", "==", id)) : collection(db, "ItemCollection")
    
        getDocs(refCollection).then((snapshot) => {
          if (snapshot.size === 0) setProducts([]);
          else {
            if (id){
              setProducts(
                snapshot.docs.map((doc) => {
                  return { id: doc.id, ...doc.data() };
                })
              )
            } else {
              setProducts(
                snapshot.docs.map((doc) => {
                  return { id: doc.id, ...doc.data() };
                })
              )
            }
          }
        }).finally(() => setLoading(false))
      }, [id]);

  
    if(loading) return <div>Loading...</div>

    return <Container className='greeting'>
        <h1>{props.greeting}</h1>
        <div className='container-productos'>
            <ItemList products={products} />
        </div>
    </Container>
   
};