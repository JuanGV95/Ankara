import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    console.log(cartList)

    const addItem = (item, quantity) => {
        const alreadyExist = cartList.some(product => product.id === item.id)
        console.log(alreadyExist)

        if (!alreadyExist)
            setCartList(prev => [...prev, { ...item, quantity }])
        else {
         const updateProducts = cartList.map(product => {
                if (product.id === item.id)
                    return {
                        ...product,
                        quantity: product.quantity + quantity,
                    }
                else return product
            })
            setCartList(updateProducts)
        }
    }

    const removeItem = (id) => {
        const cartListFiltered = cartList.filter(item => item.id !== id)
        setCartList(cartListFiltered)
    }
    const clear = () => setCartList([])

    const totalWidget = cartList.reduce((acc, val) => acc + val.quantity, 0)

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, totalWidget, cartList }}>
            {children}
        </CartContext.Provider>
    )
}