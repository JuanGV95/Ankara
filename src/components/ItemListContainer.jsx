import Container from 'react-bootstrap/Container';
import { ItemCount } from './ItemCount';
export const ItemListContainter = (props) => {
    return <Container className='greeting'><h1>{props.greeting}</h1>
     <ItemCount />
    </Container>
   
};