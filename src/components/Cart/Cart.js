import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";
import './Cart.css';

export const Cart = () =>{
    const {cartList, cartItems, totalPrice, deleteItem, removeList} = useContext(CartContext);

    if (cartItems === 0){
        return (
            <div className="container">
                <h1 className="title">Carrito Vacio</h1>
                <NavLink to={"/"}>
                    <button>Catalogo de Productos</button>
                </NavLink>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="title">tu compra</h1>
            {cartList.map( (item) =>(
                <div key={item.id}>
                    <div className="detailcard">
                        <picture>
                            <img src={item.img} alt={item.name}/>
                        </picture>
                        <div>{item.name}</div>
                        <div>Precio ${item.price}</div>
                        <div>Cantidad: {item.quantity}</div>
                        <div>
                            <button onClick={()=> deleteItem(item.id)}>Eliminar</button>
                        </div>
                    </div>    
                </div>
            ))}
            <div className="column is-mobile">
                <div className="column is-4 is-offset-8">
                    <div className="box" style={{display: "flex", justifyContent: "space-between"}}>
                        Total: ${totalPrice}{" "}
                        <NavLink to={"/checkout"}>
                            <button>Finalizar Compra</button>
                        </NavLink>
                    </div>
                    <button onClick={removeList}>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    );
};