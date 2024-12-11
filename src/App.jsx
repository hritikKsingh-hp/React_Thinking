import React from 'react'
import FilterableProductTable from './FilterableProductTable'

const PRODUCTS = [
   {category:"fruits", price:"$1", stocked:true, name:"Apple"},
   {category:"fruits", price:"$2", stocked:true, name:"Dragon Fruit"},
   {category:"fruits", price:"$6", stocked:false, name:"Passion Fruit"},
   {category:"Vegetables", price:"$3", stocked:true, name:"Spinach"},
   {category:"Vegetables", price:"$4", stocked:true, name:"Pumpkins"},
   {category:"Vegetables", price:"$5", stocked:false, name:"Peas"}
 ]
function App() {
      
    return <FilterableProductTable products={PRODUCTS}/>
      
}

export default App