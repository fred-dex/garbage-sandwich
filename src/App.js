import React, {useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import PresetContainer from './components/PresetContainer'
import CurrentOrderContainer from './components/CurrentOrderContainer';

function App() {
  const [currentOrders, SetCurrentOrders] = useState([])
  const [orderHistory, setOrderHistory] = useState([])
  function onAddToOrder(sandwich){
    SetCurrentOrders(currentOrders=>currentOrders.push(sandwich))
  }
  function onPlaceOrder(orderArray){
    for (let i=0; i<orderArray.length; i++){
      setOrderHistory(orderHistory=>orderHistory.push(orderArray[i]))
    }
  }

  return (
    <div className="App">
      <Header/>
      <h2>Pile It On, Have Fun!</h2>
      <div className="Build Sandwich">
      <PresetContainer onAddToOrder = {onAddToOrder}/>
      {currentOrders.length!==0? <CurrentOrderContainer  onPlaceOrder = {onPlaceOrder} currentOrders = {currentOrders}/>:null}
      {/* <Menu /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
