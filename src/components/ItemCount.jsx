import Add from "../assets/img/add.svg";
import Remove from "../assets/img/remove.svg";
import { useState } from "react";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const addItem = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const removeItem = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
return (
<article className="sumar-carrito">
        <div className="sumarYRemover">
            <button onClick={removeItem}><img src={Remove} alt="remover"  /></button>
            <p>{quantity}</p>
            <button onClick={addItem}><img src={Add} alt="añadir" /></button>
        </div>
       <button className="btn-carrito" onClick={() => onAdd(quantity)} disabled={!stock}><p>Agregar al carrito</p></button> 
    </article>
    )
};