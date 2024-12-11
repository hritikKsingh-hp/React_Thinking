import React from 'react'

export default function SearchBar({filterText,inStock,onfilterTextChange,oninStockChange}) {
  return (
    <form >
        <input type="text"
         value={filterText} 
         placeholder='Search Product ...'  
         onChange={(e)=>onfilterTextChange(e.target.value)}/>

        <label >
            <input type="checkbox"
             checked={inStock}
             onChange={(e)=>oninStockChange(e.target.checked)} />{' '} Only show products in stock
        </label>
    </form>
  )
}
