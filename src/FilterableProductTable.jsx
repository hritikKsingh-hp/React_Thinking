import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable({products}) {
    const [filterText,setFiltertext]=useState('')
    const [inStock,setInStock]=useState(false)
  return (
    <div>
        <SearchBar
        filterText={filterText}
        inStock={inStock}
        onfilterTextChange={setFiltertext}
        oninStockChange={setInStock}/>


        <ProductTable products={products} 
        filterText={filterText}
        inStock={inStock}/>
    </div>
  )
}
