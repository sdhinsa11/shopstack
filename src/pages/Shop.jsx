import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";



function Shop(){
    const { addToCart } = useOutletContext();
    const [allProducts, setProducts] = useState()

    //  Grab the products 
    useEffect( () => {
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then(response => response.json())
        .then(data => {
            const formattedProducts = data
                .filter(product => product.image_link) // only keep products with an image
                .map(product => ({
                    brand: product.brand,
                    image: product.image_link,
                    number: 0,
                    id: product.id,
                    desc: product.description,
                    price: product.price, 
                    type: product.product_type,
                    colors: product.product_colors.slice(0, 7)
                }));
            setProducts(formattedProducts);
        })
        .catch(error => {
            console.error("Error fetching characters: ", error)
        });
    }, []); // dont want to refetch based on filter so we good 

    console.log(allProducts);


    return (
        <>
            <h1>This is the Shopping Page</h1>
        </>
    )
}

//  This is where we call the API 

export default Shop;