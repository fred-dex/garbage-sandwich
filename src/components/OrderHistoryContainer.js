import React from 'react'
import OrderHistoryItem from './OrderHistoryItem'

export default function OrderHistoryContainer({orderHistory}) {
  return (
    <div>
      <h2>Your Past Orders</h2>
        {orderHistory.map(order=><OrderHistoryItem order = {order}/>)}
    </div>
  )
}
