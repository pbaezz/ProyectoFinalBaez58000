import "./App.css";
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./components/CartContext/CartContext";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";

function App() {
  return (

    <div className="app">
      <BrowserRouter>
      <CartProvider>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos al Mundo del Dj - Welcome to the Dj´s World'}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={ <ItemDetailContainer/> }/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>      
      </CartProvider>
      </BrowserRouter>     
    </div>
  );
}

  export default App;
