import React from 'react'

export default function OrderItem({order, index, onRemoveOrder}) {
  return (
    <div className='remove'>
        <span>{order.Name}</span>
        <p>{order.Price}</p>
        <button onClick = {()=>onRemoveOrder(index)}>Remove from Order</button>
    </div>
  )
}
