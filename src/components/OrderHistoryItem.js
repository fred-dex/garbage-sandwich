import React from 'react'

export default function OrderHistoryItem({order}) {
  return (
    <div>
      <ol>
        {order.map(sandwich=><li>{sandwich.Name}--{sandwich.Price}</li>)}
        <p>Total {order.length*15}</p>
      </ol>
    </div>
  )
}
