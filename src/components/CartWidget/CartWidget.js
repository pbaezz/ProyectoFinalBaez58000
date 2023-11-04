import cart from "./assets/shopping-cart-dollar.svg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import './CartWidget.css'


const CartWidget = () =>{
    const {cantItems} = useContext(CartContext);

    return (
        <NavLink to={`/cart`}>
            <div className="cart">
                <img src={cart} alt="cart-widget" className="image is-32x32"/>
                <span className="tag is-info is-medium">{cantItems}</span>
            </div>
        </NavLink>
    );
}

export default CartWidget;