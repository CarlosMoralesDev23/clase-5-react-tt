import Header from "../Components/Header";
import Nav from "../Components/Nav";
import Main from "../Components/Main";
import Cart from "../Components/Cart/Cart"
import ListProducts from "../Components/ListProducts";
import Footer from "../Components/Footer";
import { products } from "../Utils/data.js";
import {useState, useEffect} from "react";


const Home = ({
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    emptyCart,
}) => {

    const [ productos , setProductos ] = useState([])

    useEffect(()=>{


        fetch(
            "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/productos"
        )
            .then((respuesta) => respuesta.json())
            .then((datos) => setProductos(datos))
            .catch((error) => console.log("Error: ", error));

    }, [] )

    return (
        <>
            <Header />
            <Nav />
            <Main />

            <Cart
                cart={cart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeProduct={removeProduct}
                emptyCart={emptyCart}
            />
            
            <ListProducts addToCart={addToCart} products={productos} />

            <Footer />
        </>
    );
};

export default Home;
