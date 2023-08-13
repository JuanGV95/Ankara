import Add from "../assets/img/add.svg";
import Remove from "../assets/img/remove.svg";
export const ItemCount = () => (
    <article className="sumar-carrito">
        <h4>Cantidad</h4>
        <div className="sumarYRemover">
            <button id="itemRemove"><img src={Remove} alt="remover"  /></button>
            <p>0</p>
            <button id="itemAdd"><img src={Add} alt="añadir" /></button>
        </div>
       <button className="btn-carrito"><p>Agregar al carrito</p> </button> 
    </article>
);