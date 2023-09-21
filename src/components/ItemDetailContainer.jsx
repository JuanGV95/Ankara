import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainter = (props) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
    
        const refDoc = doc(db, "ItemCollection", id);
    
        getDoc(refDoc).then((snapshot) => {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }).finally(() => setLoading(false))
      }, [id]);

    if(loading) return <div>Loading...</div>

    return ( 
    <Container className='greeting'>
        <h1>Detalle</h1>
        <ItemDetail product={product} />
    </Container>
   )
};