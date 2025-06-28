import { useState } from 'react'
import Product from './Product.jsx'
import {useLocation } from 'react-router-dom';
  
function ProductCategory({products, addToCart}) {
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
                    <h2 key={key}>{key}</h2>
                    <div className='product'>
                        {filteredData[key].map((item) => (
                            // Replace this with the product component 
                            <div key={item.id} className='product'>
                                <h4>{item.name}</h4>
                                <h5>{item.brand}</h5>
                                <div>{item.price}</div>
                                {inShop ? 
                                    // On the shopping page 
                                     <div> <button onClick= {() => {addToCart(item)}}>Add to Cart</button> </div>
                                    :
                                    // On the cart page 
                                    <div className='add-sub-elements'>
                                        {/* Add functionalities here */}
                                        <button>+</button>
                                        <div>Count: {item.number}</div>
                                        <button>-</button>
                                        <button>Delete</button>
                                        
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