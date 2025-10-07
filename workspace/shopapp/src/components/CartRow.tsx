import React from 'react'
import type CartItem from '../models/CartItem'

type Props = {
  product: CartItem
}
export default function CartRow({product}: Props) {
  return (
    <div>
      {product.title}
    </div>
  )
}
