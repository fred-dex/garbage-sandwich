import React from 'react'

export default function OrderItem({order}) {
  return (
    <div className='remove'>
        <span>{order.Name}</span>
        <p>{order.Price}</p>
        <div className='remove2'>
        <button>Remove from Order</button>
        </div>
    </div>
  )
}
