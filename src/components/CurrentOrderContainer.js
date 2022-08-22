import React from 'react'
import OrderItem from './OrderItem'

export default function CurrentOrderContainer({currentOrders, onPlaceOrder}) {
    function handlePlaceOrder(){
        onPlaceOrder(currentOrders)
    }
  return (
    <div>
        <h1>Your Orders</h1>
        {currentOrders.map(order=><OrderItem order = {order}/>)}
        <button onClick = {handlePlaceOrder}>Place order</button>
    </div>
  )
}
