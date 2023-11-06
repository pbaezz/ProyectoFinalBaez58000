import './Item.css';
import {Link} from 'react-router-dom';

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className='cardItem'>
            <header>
                <h2 className='titulo'>
                    {name}
                </h2>
            </header>

            <picture>
                <img src={img} alt={name}/>
            </picture>
            
            <section className='info'>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;