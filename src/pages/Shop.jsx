import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import List from "../components/List.jsx"
import ProductCategory from "../components/ProductCategory.jsx"
import TextField from "@mui/material/TextField";
import '../styles/Shop.css'



function Shop(){
    const { addToCart, allProducts, searchItem, noSearch } = useOutletContext(); // for each item

    // Search bar implementation - need a clear button so that when user clears it it goes to main page

    return (
        <>
            <h1>This is the Shopping Page</h1>
            
            <div className="main">
            {/* Leave this here but get the  */}

            {
                // Only show the search item if x is not clicked 
                (noSearch || searchItem =='') ? 
                    <ProductCategory products={allProducts} addToCart={addToCart}/> 
                    : 
                    <List searchItem={searchItem} allProducts={allProducts} addToCart={addToCart}/>

            }
            </div>
  
        </>
    )
}

export default Shop;