import { createContext, useState } from "react";

export const CartContext = createContext([]) 

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => 
    setCartList(prev => [...prev, { ...item, quantity}])

   const removeItem = (id) => {
    const cartListFiltered = cartList.filter(item => item.id !== id)
    setCartList(cartListFiltered)
}
    const clear = () => setCartList([])

    return ( 
        <CartContext.Provider value={{ addItem, removeItem, clear }}>
        {children}
        </CartContext.Provider>
        )
}