import React from 'react'

export default function OrderItem({order}) {
  return (
    <div className='remove'>
        <span>〰️{order.Name}〰️</span>
        <p>{order.Price}</p>
        <button>Remove from Order</button>
    </div>
  )
}
