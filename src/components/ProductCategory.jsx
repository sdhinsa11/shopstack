import { useState } from 'react'
  
function ProductCategory({products, noCart}) {
    // products is both all products and cart products depending whose calling 

    if (noCart){
        const filteredData = products.reduce((acc, item) => { 
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

    }

    else {
        const filteredData =[]
    }

    

    // const filteredData = Object.groupBy(allProducts, type);

    console.log(filteredData);



      return (
          <ul>
              {/* {g.map((item) => (
                  <li key={item.id}>{item.brand} - {item.name}</li>
              ))} */}
          </ul>
      )
  }
  
  export default ProductCategory;