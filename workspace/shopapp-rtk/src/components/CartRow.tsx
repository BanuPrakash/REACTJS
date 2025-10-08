import React, { useContext } from 'react'
import type CartItem from '../models/CartItem'

import { Button } from 'react-bootstrap'
import { useAppDispatch } from '../redux/store'
import { increment } from '../redux/features/cartSlice'

type Props = {
  product: CartItem
}
export default function CartRow({product}: Props) {
 let dispatch = useAppDispatch();

  return (
    <div className='row'>
     <div className='col-md-2'>
      <img src={product.image} alt={product.title} width={50} height={50} />
     </div>
     <div className='col-md-2'>
        {product.title}
     </div>
     <div className='col-md-4'>
        <Button> - </Button>
          &nbsp;
            {product.qty}
          &nbsp;
        <Button onClick={() => dispatch(increment(product.id))}> + </Button>
     </div>
     <div className='col-md-2'>
        Price: {product.price}
     </div>
     <div className='col-md-2'>
        Amount: {product.amount}
     </div>
    </div>
  )
}
