import React, { useContext } from 'react'
import { CartContext } from './CartContextProvider'
import { Button, Container } from 'react-bootstrap';
import CartRow from './CartRow';

export default function CartComp() {
  let { items, total, checkout } = useContext(CartContext);

  return (
    <Container>
      <div>
        {
          items && items.map(item => <CartRow product={item} key={item.id} />)
        }
      </div>
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
          <Button onClick={() => checkout()}>Checkout</Button>
        </div>
      </div>
    </Container>
  )
}
