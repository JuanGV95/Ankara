import { createContext, useState } from "react";

export const CartContext = createContext([]) 

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    console.log(cartList)

    const addItem = (item, quantity) => 
    setCartList(prev => [...prev, { ...item, quantity}])

   const removeItem = (id) => {
    const cartListFiltered = cartList.filter(item => item.id !== id)
    setCartList(cartListFiltered)
}
    const clear = () => setCartList([])
    
    const totalWidget = cartList.reduce((acc, val) => acc + val.quantity, 0)
    
    return ( 
        <CartContext.Provider value={{ addItem, removeItem, clear, totalWidget }}>
        {children}
        </CartContext.Provider>
        )
}