import React from 'react'

export default function OrderItem({order}) {
  return (
    <div>
        <span>{order.name}</span>
        <button>Remove from Order</button>
    </div>
  )
}
