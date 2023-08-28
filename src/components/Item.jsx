import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <section key={product.id} className='contenedor-card'>  
      <img src={require(`../assets/img/${product.pictureUrl}`)} className='img-card' />
      <h2>{product.title}</h2>
      <Link className='boton-contenedor' to={`/item/${product.id}`} >
        <button className='card-button'>Ver detalle</button>
      </Link>
  </section>
);