import React from 'react'

export default function OrderItem({order}) {
  return (
    <div>
        <span>{order.Name}</span>
        <button>Remove from Order</button>
    </div>
  )
}
