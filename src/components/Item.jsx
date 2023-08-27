import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({product}) =>  (
<Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../assets/img/${product.pictureUrl}`)}  />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to={`/item/${product.id}`}>
          <Button variant="primary">Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
      );