import './ItemDetail.css';
import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';

const ItemDetail = ({id, name, img, category, description, price, stock })=>{
    const [quantityAdd, setQuantityAdd] = useState(0);
    const {addToCart} = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantityAdd(quantity);
        const item = {id, name, img, category, description, price, stock};
        addToCart(item, quantity);
    };

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio:{price}
                </p>
            </section>
            <footer>
                {quantityAdd > 0 ? (<NavLink to={`/cart`}>
                    <button className='finalizar'>Finalizar Compra</button>
                </NavLink>
                ):(<ItemCount initial={1} stock={stock} onAdd={onAdd}/>)}
            </footer>
        </article>
    )
}

export default ItemDetail;