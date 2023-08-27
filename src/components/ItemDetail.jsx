import { ItemCount } from './ItemCount';

export const ItemDetail = ({product}) => (
    <div style={{display: "flex", flexWrap: "wrap"}}>
            <h1>{product.name}</h1>
            <img src={require(`../assets/img/${product.pictureUrl}`)} alt="foto" />
            <div>{product.stock}</div>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantida agregada', quantity)}/>
        </div>

    );