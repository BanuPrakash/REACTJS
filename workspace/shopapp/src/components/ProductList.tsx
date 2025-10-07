import React, { useEffect, useState } from 'react'
import type Product from '../models/Product'
import axios from 'axios';
import ProductCard from './ProductCard';

export default function ProductList() {
  let [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=5")
    .then(response => setProducts(response.data));
  }, []);

  return (
    <div className='row'>
      {
        products && products.map(product => <ProductCard 
            product={product} key={product.id}/>)
      }
    </div>
  )
}
