import { useContext } from "react";
import { Link}  from "react-router-dom";
import Cart from "../assets/img/cart.svg";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
    const {totalWidget} = useContext(CartContext)
    return <>
    <div className="cartNav">
    <Link to="/cart">
     <img src={Cart} alt="Cart" />
    </Link>
    <h2>{totalWidget}</h2>
     </div>
     </>
}