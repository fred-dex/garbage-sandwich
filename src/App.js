import React, {useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import { 
  Link,
  Route,
  Routes
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import PresetContainer from './components/PresetContainer'
// import { PresetContainer } from './components/PresetContainer'
import CurrentOrderContainer from './components/CurrentOrderContainer';
import OrderHistoryContainer from './components/OrderHistoryContainer';
import NewSandwichForm from './components/NewSandwichForm';


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


    <div className="App">

     
        <Header /> 

        <h2>Pile It On, Have Fun!</  h2>
        <div className="Build Sandwich">
        <PresetContainer onAddToOrder = {onAddToOrder}/>
        {currentOrders.length!==0? <CurrentOrderContainer  onPlaceOrder = {onPlaceOrder} currentOrders = {currentOrders}/>:null}
        </div>
        <OrderHistoryContainer orderHistory = {orderHistory} />
        <Footer/>
      <Routes>
        <Route path="/" component={<PresetContainer/> } />
        <Route path = "/newsandwichform" component={<NewSandwichForm />} />
      </Routes>


      <Header/>
      <div className="Build Sandwich">
      <PresetContainer onAddToOrder = {onAddToOrder}/>
      {currentOrders.length!==0? <CurrentOrderContainer  onPlaceOrder = {onPlaceOrder} currentOrders = {currentOrders}/>:null}
      </div>
      <OrderHistoryContainer orderHistory = {orderHistory} />
      <NewSandwichForm />
      <Footer/>

    </div>

  );
}

export default App;
