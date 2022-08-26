import React, {useState, useEffect} from 'react';
import './App.css';
import About from './components/About';
import { 
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu'
// import { PresetContainer } from './components/PresetContainer'
import CurrentOrderContainer from './components/CurrentOrderContainer';
import OrderHistoryContainer from './components/OrderHistoryContainer';

import NewSandwichForm from './components/NewSandwichForm'

export default function App() {
  const [currentOrders, setCurrentOrders] = useState([])
  const [orderHistory, setOrderHistory] = useState([])
  function onAddToOrder(sandwich){
    setCurrentOrders([...currentOrders, sandwich]);
  }
  function onPlaceOrder(orderArray){
    const newOrders = []
    for (let i=0; i<orderArray.length; i++){
      newOrders.push(orderArray[i])
    }
    setOrderHistory([...orderHistory, newOrders])
    setCurrentOrders([])
  }
  function handleLoad(){
    fetch("http://localhost:4000/orderhistory")
    .then(res=>res.json())
    .then(data=>setOrderHistory(data))
  }
  useEffect(handleLoad, [])
  
  function onRemoveOrder(index){
    let currentCopy = [...currentOrders]
    currentCopy.splice(index, 1)
    
    setCurrentOrders(currentCopy)
  }
  return (

<Router>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="*" element={<Menu onAddToOrder = {onAddToOrder}/> } />
        <Route path = "/menu" element={<Menu onAddToOrder = {onAddToOrder}/>} />
        <Route path = "/newsandwichform" element={<NewSandwichForm onAddToOrder = {onAddToOrder}/>} /> 
        <Route path = "/orderhistorycontainer" element={<OrderHistoryContainer orderHistory = {orderHistory} />} />
        <Route path = "/about" element={<About />} />
      </Routes>
        <div className="Build Sandwich">
        {currentOrders.length!==0? <CurrentOrderContainer onRemoveOrder={onRemoveOrder} onPlaceOrder = {onPlaceOrder} currentOrders = {currentOrders}/>:null}
        </div>
        <Footer/>
      </div>
  </Router>
  )
}
