import { useContext } from "react";
import Cart from "../assets/img/cart.svg";
import { CartContext } from "../contexts/CartContext";
import { Link}  from "react-router-dom";

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