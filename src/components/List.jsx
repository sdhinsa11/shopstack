import { useState } from 'react'
  
function List({searchItem, allProducts, addToCart}) {

    const filteredData = allProducts.filter((el) =>{
        
        // No search 
        if (searchItem === ''){
            return true;
        }
        
        else {
            return (
                // Use the questoin marks after because it won't crash then
                el.name?.toLowerCase().includes(searchItem) ||
                el.brand?.toLowerCase().includes(searchItem) ||
                el.type?.toLowerCase().includes(searchItem)
            )
            

        }
    })



      return (
          <div>
              {filteredData.map((item) => (
                  <div key={item.id} className='product'>
                  <h4>{item.name}</h4>
                  <h5>{item.brand}</h5>
                  <button onClick= {() => {addToCart(item)}}>Add to Cart</button>
              </div>
              ))}
          </div>
      )
  }
  
  export default List
