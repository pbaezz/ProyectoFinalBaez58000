import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

import { getDoc, doc } from 'firebase/firestore';
import { ls } from '../../config/firebase';

const ItemDetailContainer = () => {
    const[product, setProduct] = useState(null)

    const { itemId } = useParams();
    
    useEffect(()=>{
        /* getProductById(itemId)
        .then(response => {
            setProduct(response);
        })
        .catch(error => {
            console.error(error);
        }) */
        const refDoc= doc (ls, "Productos", itemId);
        getDoc(refDoc)
            .then((response)=>{
                const data = response.data();
                const productAd={id: response.id, ...data};
                setProduct(productAd);
            })
            .catch((error)=> console.log(error));
    },[itemId]);

    return(
        <div className='container'>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;