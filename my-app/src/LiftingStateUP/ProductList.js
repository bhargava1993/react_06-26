import { useState } from "react";
import {Link} from 'react-router-dom';

function ProductList({setCartCount}) {
    // const [cartCount, setCartCount] = useState(0);


    return (
        <>
        <h1>Product List Component</h1>
            <button onClick={
                () => setCartCount(prev=>prev+1)
            }>
                Add to cart
            </button>

        <br></br>
        {/* <Link to='/cart'> Go to cart</Link> */}
            {/* <p>Items in cart: {cartCount}</p> */}
        </>)

}

export default ProductList;