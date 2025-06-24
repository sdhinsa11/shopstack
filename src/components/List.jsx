import { useState } from 'react'
  
function List({searchItem, allProducts}) {

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
          <ul>
              {filteredData.map((item) => (
                  <li key={item.id}>{item.brand} - {item.name}</li>
              ))}
          </ul>
      )
  }
  
  export default List
