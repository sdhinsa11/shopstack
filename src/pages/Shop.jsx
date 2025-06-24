import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import List from "../components/List.jsx"
import TextField from "@mui/material/TextField";
import '../styles/Shop.css'



function Shop(){
    const { addToCart, allProducts, searchItem } = useOutletContext(); // for each item
    const [noSearch, setNoSearch] = useState(false);




    // Search bar implementation - need a clear button so that when user clears it it goes to main page

    return (
        <>
            <h1>This is the Shopping Page</h1>
            
            <div className="main">
            {/* Leave this here but get the  */}
            <List searchItem={searchItem} allProducts={allProducts}/>
            </div>
  
        </>
    )
}

//  This is where we call the API 

export default Shop;