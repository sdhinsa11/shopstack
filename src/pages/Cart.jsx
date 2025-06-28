import { useState } from 'react'

import { useOutletContext } from "react-router-dom";
import ProductCategory from '../components/ProductCategory';

function Cart(){
    const {cart, cartNum, price, addToCart, deleteFromCart} = useOutletContext();

    return (
        <>
            <h1>This is the Shopping Cart Page</h1>
            <div className='allItems'>
                <ProductCategory products={cart} addToCart={addToCart} deleteFromCart = {deleteFromCart}/>
            </div>
            
            <div className='prices-and-count'>
                <div className='total-count'>Number of items: {cartNum}</div>
                <div className='price'>Total Price: {price}</div>


            </div>
        </>
    )
}

export default Cart;