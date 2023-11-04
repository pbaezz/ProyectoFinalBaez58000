import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { NavLink } from "react-router-dom";

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
            <h1 className="title">Tu Compra</h1>
            {cartList.map( (item) =>(
                <div className="box" key={item.id}>
                    <div className="colums">
                        <div className="column is-2">
                            <img src={item.img} alt={item.name} className="image is-64x64"/>
                        </div>
                        <div className="column">{item.name}</div>
                        <div className="column">Precio ${item.price}</div>
                        <div className="column">Cantidad: {item.quantity}</div>
                        <div className="column is-1">
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