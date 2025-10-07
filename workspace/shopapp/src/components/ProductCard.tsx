import React from 'react'
import type Product from '../models/Product'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  let { id, image, title, price } = product;
  return (
    <div className='col-xl-4 col-md-6 my-2 '>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer>
          $. {price}
        </Card.Footer>
      </Card>
    </div>
  )
}
