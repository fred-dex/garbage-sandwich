import React from 'react'
import OrderHistoryItem from './OrderHistoryItem'

export default function OrderHistoryContainer({orderHistory}) {
  return (
    <div>
        {orderHistory.map(order=><OrderHistoryItem order = {order}/>)}
    </div>
  )
}
