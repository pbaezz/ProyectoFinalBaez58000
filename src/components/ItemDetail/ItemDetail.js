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
        <article className='cardItem2'>
            <header>
                <h2 className='titulo'>
                    {name}
                </h2>
            </header>

            <div className='detalle'>
                <picture>
                    <img src={img} alt={name}/>
                </picture>
                <section className='info'>
                    <p>
                        Categoria: {category}
                    </p>
                    <p>
                        Descripcion: {description}
                    </p>
                    <p>
                        Precio:{price}
                    </p>
                </section>
            </div>
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