import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import type Product from '../models/Product';
import axios from 'axios';

export default function Details() {
  let [product, setProduct] = React.useState<Product|null>(null);

  let {id} = useParams(); // Path Variable

  useEffect(() => { 
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response => setProduct(response.data)); 
  }, [id]);

  return (
    <div>
      <h1>Details</h1>
      {
      product && (
        <div>
          <h2>{product!.title}</h2>
          <img src={product!.image} alt={product!.title} height="200"/>
          <p>{product!.description}</p>
          <h3>$. {product!.price}</h3>
        </div>
      )
    }
    </div>
  )
}
