import { Container } from "react-bootstrap"
import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore"
export const Cart = () => {
    const { clear, cartList, removeItem} = useContext(CartContext)
    const[formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const total = () =>
        cartList.reduce(
            (actual, vlAct) =>
            actual + vlAct.quantity * vlAct.price, 0
        )

    const handleChange = event => {
        setFormValues(prev => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }

        const sendOrder = () => {
            const order = {
            buyer: formValues,
            items: cartList,
            total: total(),
          };
          
          const db = getFirestore();
          const orderCollection = collection(db, "orders");
          
          addDoc(orderCollection, order).then(({ id }) => {
            if (id){
                setFormValues({
                    name: "",
                    phone: "",
                    email: "",
                })
              clear();  
              alert(`Su orden: ${id} ha sido creada!`);
            }
          });
    };


    return <> 
    <Container className="contenedor-detalle-compra">
        <h1>Cart</h1>
        <ul className="nombre-detalle-compra">
            <li>Nombre</li>
            <li>Precio</li>
            <li>Cantidad</li>
        </ul> 
        <div className="articulos-detalle-compra">
            {cartList.map(item => (
                <section key={item.id}>
                    <article>{item.title} </article>
                    <article>{item.price} </article>
                    <article>{item.quantity} </article>
                    <button onClick={() => removeItem(item.id)}>Eliminar</button>
                </section>
            ))}
        </div>
            <ul className="total-detalle-compra">
                <li>Total</li>
                <li>{total()}</li>
            </ul>
            <form action="#" className="formulario-detalle-compra">
                <label>Nombre</label>
                <input type="text" name="name" onChange={handleChange} value={formValues.name} placeholder="Nombre" required/>
                <label>Telefono</label>
                <input type="number" name="phone" onChange={handleChange} value={formValues.phone} placeholder="Telefono" required/>
                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} value={formValues.email} placeholder="Email" required/>

            </form>
            <button onClick={sendOrder}>Comprar</button>   
    </Container>
    </>
}