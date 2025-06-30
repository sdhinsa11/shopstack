import { useState, useEffect } from 'react'
// import '../styles/App.css'
import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar.jsx'

function App() {
  // This is a LAYOUT component and not a page so turn the nav bar into a component and then 
  // But this is always being displayed in all the component?
  //  The app is a nav bar comeponent? 
  const [cart, setCart] = useState([]); // Cart state
  var [cartNum, setCartNum] = useState(0); 
  var [price, setCartPrice] = useState(0);
  const [searchItem, setSearchItem] = useState(''); // search item 
  const [allProducts, setProducts] = useState([]);
  const [noSearch, setNoSearch] = useState(true); // No search 


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
                price: parseFloat(product.price), 
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
    // Check if item already in the cart and if so show an alert
    const result = cart.filter(p => p.id == product.id ) // Filters the items in the list and if it is the product it is added to the list
    console.log(result);
    if (result.length > 0)
    {
        alert("Item is already added");
        //  Or we can increase the number
    }
    else
    {
      // Set the cart list, increase the product number specifically, increase the number of items count and price
      setCart((prev) => [...prev, product]);
      product.number += 1;
      setCartNum(cartNum+=1)
      setCartPrice(price+=product.price);

    }
  }; 

  const deleteFromCart = (product) =>{ // Put this here because it's easier to put this here when the state is defined here 
    // Need to handle the total number of items, the total price, the cart list, and the number for the product
    setCartNum(cartNum-=product.number); // decreased by number of items we have for that product 
    setCartPrice(price-= (product.price * product.number)); // decreased by price * number because you could have more than 1 item
    product.number = 0; // set the number back to 0 for the product
    setCart(cart.filter(p => p.id != product.id)) // get rid of the product 
      
       
  }; // remove item from cart 
  
  const increaseItem = (product) =>{ // Put this here because it's easier to put this here when the state is defined here 
    // Need to handle the total number of items, the total price, and the number for the product
    setCartNum(cartNum+=1); // decreased by number of items we have for that product 
    setCartPrice(price+= (product.price)); // decreased by price * number because you could have more than 1 item
    product.number += 1; // set the number back to 0 for the product
     // get rid of the product 
      
       
  }; // remove item from cart 

  const decreaseItem = (product) =>{ // Put this here because it's easier to put this here when the state is defined here 
      // Need to handle the total number of items, the total price, and the number for the product and if it can be negative product, delete from the list

    setCartNum(cartNum-=1); // decreased by number of items we have for that product 
    setCartPrice(price-= product.price); // decreased by price * number because you could have more than 1 item
    product.number -=1;
    
    if (product.number == 0){
    product.number = 0; // set the number back to 0 for the product
    setCart(cart.filter(p => p.id != product.id)) // get rid of the product 
    }
    
  }; // remove item from cart 

    

  console.log(cart)


  return (
    <div>
      <NavBar searchItem={searchItem} setSearchItem={setSearchItem} noSearch={noSearch} setNoSearch={setNoSearch} />
      <Outlet context={{ cart, addToCart, searchItem, allProducts, noSearch, cartNum, price, deleteFromCart, increaseItem, decreaseItem }} /> {/* This is where the "child" page content will appear, this is like the routes if we were doing this another way. */}
    </div>
  )

};

export default App;
