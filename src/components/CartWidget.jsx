import { useContext } from "react";
import Cart from "../assets/img/cart.svg";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
    const {totalWidget} = useContext(CartContext)
    return <>
    <div className="cartNav">
     <img src={Cart} alt="Cart" />
    <h2>{totalWidget}</h2>
     </div>
     </>
}