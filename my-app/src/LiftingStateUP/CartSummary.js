import { useState } from "react";

function CartSummary({cartCount}){
    console.log("cartCount----",cartCount);
    return(
        <>
        <h1>CartSummary Component</h1>
        <h1>cart Items: {cartCount}</h1>
        </>
    )
}

export default CartSummary;