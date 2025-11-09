import { useState } from 'react'

import { useOutletContext } from "react-router-dom";
import ProductCategory from '../components/ProductCategory';
import '../styles/Cart.css'


function Cart(){
    const {cartNum, price, cart} = useOutletContext();

    return (
        <>
            {/* <h1>This is the Shopping Cart Page</h1> */}
            <div className='allItems'>
                <ProductCategory products={cart}/>
            </div>
            
            <div className='prices-and-count'>
                <h1 className='total-count'>Number of items: {cartNum}</h1>
                <h1 className='price'>Total Price: {price}</h1>
            </div>
        </>
    )
}

export default Cart;