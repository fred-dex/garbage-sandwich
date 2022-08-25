import React from 'react'
import OrderHistoryItem from './OrderHistoryItem'

export default function OrderHistoryContainer({orderHistory}) {
  return (
    <div className="">
      <h2>Your Past Orders</h2> <span className='order-history' >
        {orderHistory.map(order=><OrderHistoryItem order = {order}/>)}
        </span>
    </div>
  )
}
