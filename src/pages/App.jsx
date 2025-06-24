import { useState, useEffect } from 'react'
import '../styles/App.css'
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar.jsx'

function App() {
  // This is a LAYOUT component and not a page so turn the nav bar into a component and then 
  // But this is always being displayed in all the component?
  //  The app is a nav bar comeponent? 
  const [cart, setCart] = useState(); // Cart state 
  const [searchItem, setSearchItem] = useState(''); // search item 
  const [allProducts, setProducts] = useState([]);

  // fetch the products
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
        console.log('API is fetched');
    })
    .catch(error => {
        console.error("Error fetching characters: ", error)
    });
}, []); // dont want to refetch based on filter so we good 



  const addToCart = (product) =>{
    setCart((prev) => [...prev, product]);
  };



  return (
    <div>
      <NavBar searchItem={searchItem} setSearchItem={setSearchItem} /> Always displayed
      <Outlet context={{ cart, addToCart, searchItem, allProducts }} /> {/* This is where the "child" page content will appear, this is like the routes if we were doing this another way. */}
    </div>
  )
}

export default App;
