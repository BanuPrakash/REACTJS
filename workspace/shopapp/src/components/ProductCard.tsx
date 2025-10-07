import React, { useContext } from 'react'
import type Product from '../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContextProvider';

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  let { id, image, title, price } = product;
  // Context Consumer
  let {addToCart} = useContext(CartContext); 
  return (
    <div className='col-xl-4 col-md-6 my-2'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          $. {price}
          &nbsp; &nbsp; &nbsp;
          <FontAwesomeIcon icon={faHeart} color='red' />
          &nbsp; &nbsp; &nbsp;
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            color='blue' 
            onClick={() => addToCart({...product, qty: 1, amount: product.price})}
            />
        </Card.Footer>
      </Card>
    </div>
  )
}
