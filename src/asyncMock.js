/* import cdj from "./img/pioneer-dj-cdj-3000.jpg";
import hdj from "./img/pioneer-hdj-x5-k-hdj-x5-k.jpg";
import plx from "./img/pioneer-plx-500.jpg";

const products = [
    {
        id:'1',
        name:'PIONEER CDJ-3000',
        price: 3000,
        category:'Cdjs',
        img:cdj,
        stock: 10,
        description:'Reproductor DJ Profesional , LCD 9" , Audio 96 kHz / 32 bits , RekordBox DJ'
    },

    {
        id:'2',
        name:'PIONEER XDJ X5',
        price: 1500,
        category:'Auriculares',
        img:hdj,
        stock: 50,
        description:'Auricular DJ Profesional 3500 mW, 102 dB'
    },

    {
        id:'3',
        name:'PIONEER PLX 500',
        price: 4000,
        category:'Bandejas Vinilos',
        img:plx,
        stock: 20,
        description:'Bandeja Profesional reproductora de vinilos'
    }
]

export const getProducts =() =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById =(productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id===productId))
        },500)
    })
}

export const getProductsByCategory = (category)=>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter( prod => prod.category===category ))
        }, 500);
    })
} */