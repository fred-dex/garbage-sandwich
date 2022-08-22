import React, {useState} from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import PresetContainer from './components/PresetContainer'
import CurrentOrderContainer from './components/CurrentOrderContainer';
import OrderHistoryContainer from './components/OrderHistoryContainer';

function App() {
  const [currentOrders, setCurrentOrders] = useState([])
  const [orderHistory, setOrderHistory] = useState([])
  function onAddToOrder(sandwich){
    setCurrentOrders([...currentOrders, sandwich]);
  }
  function onPlaceOrder(orderArray){
    for (let i=0; i<orderArray.length; i++){
      setOrderHistory([...orderHistory, orderArray[i]])
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
      <OrderHistoryContainer orderHistory = {orderHistory} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
