import { Container } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"


export const Cart = () => {
    const {cartList, removeItem} = useContext(CartContext)

    const total = () =>
        cartList.reduce(
            (acc, vlAct) =>
            acc + vlAct.quantity * vlAct.price, 0
        )

    return <> 
    <Container>
        <h1>Cart</h1>
        <ul>
            <li>Nombre</li>
            <li>Precio</li>
            <li>Cantidad</li>
        </ul> 
        <div>
            {cartList.map(item => (
                <section key={item.id}>
                    <article>{item.title} </article>
                    <article>{item.price} </article>
                    <article>{item.quantity} </article>
                    <button onClick={removeItem}>Eliminar</button>
                </section>
            ))}
            </div>
            <ul>
                <li>Total</li>
                <li>{total()}</li>
            </ul>   
    </Container>
    </>
}