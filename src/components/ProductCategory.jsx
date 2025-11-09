import { useState } from 'react'
import Product from './Product.jsx'
import {useLocation, useOutletContext } from 'react-router-dom';
import '../styles/Shop.css'
  
function ProductCategory({products}) {
    const {addToCart, deleteFromCart, increaseItem, decreaseItem} = useOutletContext();
    // to determine which page we are on
    const location = useLocation()
    const path = location.pathname.toLowerCase();
    const inShop = path === '/shop';

    // products is both all products and cart products depending whose calling 
    var filteredData =[]
    // if (noCart){
        filteredData = products.reduce((acc, item) => { 
            // In the context of grouping, the accumulator will be an object that stores 
            // the grouped data. Its initial value is typically an empty object {}.
    
            // The current element being processed from the array. (ie item)
    
            // Determining the group key: A property or derived value from the currentValue 
            // is used as the key for the group in the accumulator object
    
            // Determining the group key: A property or derived value from the 
            // currentValue is used as the key for the group in the accumulator object
    
            //  The callback function must return the updated accumulator for the next iteration.
           
    
            const category = item.type
    
            // Create category if doesn't exist
            if (!acc[category]){
                acc[category] = [];
            }
    
            // add current item to that category 
            acc[category].push(item);
    
            return acc;
    
        }, {});


    // console.log(filteredData);



    // Loop Through each key 
    // Display Key 
    // Display Object in each list of that key using a component 

      return (
        <> 
            {/* {noCart ? "hi" : "bye"} */}
            {Object.keys(filteredData).map((key)  => (
                <div key={key} className='category'>
                    <h2 key={key}>{key.split('_') // split at underscores
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
                                        .join(' ')}</h2>
                    <div className='product-grid'>
                        {filteredData[key].map((item) => (
                            // Replace this with the product component 
                            <div key={item.id} className='product-card'>
                                <h4>{item.name}</h4>
                                <h5>{item.brand}</h5>
                                <p>${item.price}</p>
                                <img className= 'product-image' src={item.image} alt={products.name}></img>
                                {inShop ? 
                                    // On the shopping page 
                                     <div> <button className="product-btn" onClick= {() => {addToCart(item)}}>Add to Cart</button> </div>
                                    :
                                    // On the cart page 
                                    <div className='cart-controls'>
                                        {/* Add functionalities here */}
                                        <button onClick = {() => {increaseItem(item)}}>+</button>
                                        <span>Count: {item.number}</span>
                                        <button onClick= {() => {decreaseItem(item)}}>-</button>
                                        <button onClick= {() => {deleteFromCart(item)}}>Delete</button>
                                        
                                    </div>
                                   
                                }
                            </div>
                            
                        ))}
                    </div>
                </div>
            ))}
        </>
      )
  }
  
  export default ProductCategory;