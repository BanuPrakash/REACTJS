import React, { useContext } from 'react'

import { Button, Container } from 'react-bootstrap';
import { useAppSelector } from '../redux/store';
 
import CartRow from './CartRow';

export default function CartComp() {
 let {items, total} = useAppSelector(state => state.cart);
  return (
    <Container>
     {
      items.map(product => <CartRow key={product.id} product={product}/>)
     }
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          Total: {total}
        </div>
      </div>
      <div className='row'>
        <div className='col-md-10'>
          &nbsp;
        </div>
        <div className='col-md-2'>
          <Button >Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
