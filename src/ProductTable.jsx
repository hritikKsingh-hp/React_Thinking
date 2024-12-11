import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable({ products, filterText, inStock }) {
    const row=[]
    let last_category=null
console.log(row);

    products.forEach((product) => {
        
    
        if (
            product.name.toLowerCase().indexOf(
              filterText.toLowerCase()
            ) === -1
          ) {
            return;
          }
          if (inStock && !product.stocked) {
            return;
          }
        if (product.category!==last_category) {
            row.push(
                <ProductCategoryRow 
                category={product.category}
                key={product.category}/>
            )
        }
        row.push(
            <ProductRow product={product} key={product.name}/>
        )
        last_category=product.category
        
    });
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>{row}</tbody>
    </table>
  )
}
