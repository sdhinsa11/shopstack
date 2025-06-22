import { useState } from 'react'

import { useOutletContext } from "react-router-dom";

function Cart(){
    const {cart} = useOutletContext();

    return (
        <>
            <h1>This is the Shopping Cart Page</h1>
        </>
    )
}

export default Cart;