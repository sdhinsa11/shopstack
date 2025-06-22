import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import List from "../components/List.jsx"
import TextField from "@mui/material/TextField";
import '../styles/Shop.css'



function Shop(){
    const { addToCart } = useOutletContext();
    const [allProducts, setProducts] = useState([])
    const [searchItem, setSearchItem] = useState('');

    //  Grab the products 
    useEffect( () => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(response => response.json())
        .then(data => {
            const formattedProducts = data
                .filter(product => product.image_link) // only keep products with an image
                .map(product => ({
                    brand: product.brand,
                    name: product.name,
                    image: product.image_link,
                    number: 0,
                    id: product.id,
                    desc: product.description,
                    price: product.price, 
                    category: product.category,
                    type: product.product_type,
                    colors: product.product_colors.slice(0, 7)
                }));
            setProducts(formattedProducts);
        })
        .catch(error => {
            console.error("Error fetching characters: ", error)
        });
    }, []); // dont want to refetch based on filter so we good 

    // Search bar implementation
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchItem(lowerCase);
    }

    // console.log(allProducts);


    return (
        <>
            <h1>This is the Shopping Page</h1>
            
            <div className="main">
            <h1>React Search</h1>
            <div className="search">
                <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>
            <List searchItem={searchItem} allProducts={allProducts}/>
            </div>
  
        </>
    )
}

//  This is where we call the API 

export default Shop;