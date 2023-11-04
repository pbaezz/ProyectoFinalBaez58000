import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [cantItems, setCantItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const isInCart = (id) => {
        return cartList.some((item) => item.id === id);
    };

    const addToCart = (item, quantity) => {
    if (!isInCart(item.id)) {
        setCartList((prev) => [...prev, { ...item, quantity }]);
        setCantItems((prev) => prev + quantity);
        setTotalPrice((prev) => prev + item.price * quantity);
        } else {
            console.log("El producto ya está agregado");
        }
    };

    const deleteItem = (id) => {
        const item = cartList.find((item) => item.id == id);
        setCantItems((prev) => prev - item.quantity);
        setTotalPrice((prev) => prev - item.quantity * item.price);
        setCartList(cartList.filter((item) => item.id !== id));
    };

    const removeList = () => {
        setCartList([]);
        setCantItems(0);
        setTotalPrice(0);
    };

    const value = { cartList, cantItems, totalPrice, addToCart, deleteItem, removeList };

    return (
    <>
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
    );
};
