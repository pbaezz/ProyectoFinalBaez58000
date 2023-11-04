import './ItemListContainer.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
//import { getProducts, getProductsByCategory} from "../../asyncMock";

import { getDocs, collection, query, where } from "firebase/firestore";
import { ls } from "../../config/firebase";


const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([]);
    
    const {categoryId} = useParams();

    useEffect(()=>{
        /* const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error)
            }) */

            const collectionRef = categoryId
                ? query(collection(ls, "Productos"), where("category", "==", categoryId))
                : collection(ls, "Productos");
            getDocs(collectionRef)
                .then((response)=>{
                    const productsAdapted = response.docs.map((doc)=>{
                        const data = doc.data();
                        return {id: doc.id, ...data};
                    });
                    setProducts(productsAdapted);
                })
                .catch((error)=>{
                    console.log(error);
                })
    },[categoryId]); 

    return (
            <div className="ItemListContainer">
                <h1>{greeting}</h1>
                <ItemList products={products}/>
            </div>
    )
}

export default ItemListContainer;
