import React, {useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import { 
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import PresetContainer from './components/PresetContainer'
// import { PresetContainer } from './components/PresetContainer'
import CurrentOrderContainer from './components/CurrentOrderContainer';
import OrderHistoryContainer from './components/OrderHistoryContainer';
<<<<<<< HEAD

import NewSandwichForm from './components/NewSandwichForm'

// import NewSandwichForm from './components/NewSandwichForm;
=======
import NewSandwichForm from './components/NewSandwichForm';
>>>>>>> a9b6a2f95ef6fd0ed88b80accb7a099e31038d07


function App() {
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
    setOrderHistory([...orderHistory, ...newOrders])
    setCurrentOrders([])
  }

  return (

<Router>
    <div className="App">
<<<<<<< HEAD
=======

     
        <Header /> 
>>>>>>> a9b6a2f95ef6fd0ed88b80accb7a099e31038d07

        <Header /> 
      <Routes>
        <Route path="*" element={<PresetContainer/> } />
        <Route path = "/presetsandwichcontainer" element={<PresetContainer onAddToOrder = {onAddToOrder}/>} />
        <Route path = "/newsandwichform" element={<NewSandwichForm />} /> 
        <Route path = "/orderhistorycontainer" element={<OrderHistoryContainer orderHistory = {orderHistory} />} />
      </Routes>
     


        <div className="Build Sandwich">
        {/* <PresetContainer onAddToOrder = {onAddToOrder}/> */}
        {currentOrders.length!==0? <CurrentOrderContainer  onPlaceOrder = {onPlaceOrder} currentOrders = {currentOrders}/>:null}
        </div>
        {/* <OrderHistoryContainer orderHistory = {orderHistory} /> */}
        <Footer/>
      


<<<<<<< HEAD

     
=======
      <Header/>
      <div className="Build Sandwich">
      <PresetContainer onAddToOrder = {onAddToOrder}/>
      {currentOrders.length!==0? <CurrentOrderContainer  onPlaceOrder = {onPlaceOrder} currentOrders = {currentOrders}/>:null}
      </div>
      <OrderHistoryContainer orderHistory = {orderHistory} />
      <NewSandwichForm />
      <Footer/>

>>>>>>> a9b6a2f95ef6fd0ed88b80accb7a099e31038d07
    </div>
    </Router>
  );
}

export default App;
