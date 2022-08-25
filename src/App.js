import React, {useState} from 'react';
import './App.css';
import { 
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CurrentOrderContainer from './components/CurrentOrderContainer';
import OrderHistoryContainer from './components/OrderHistoryContainer';
import About from './components/About'

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
      <Header/>
      <Routes>
        <Route className='history' path = "/orderhistorycontainer" element={<OrderHistoryContainer orderHistory = {orderHistory} />} />
        <Route className='about' path = '/about' element={<About />} />
      </Routes>
    </div>

    <div className="Build Sandwich">
        {/* <PresetContainer onAddToOrder = {onAddToOrder}/> */}
        {currentOrders.length!==0? <CurrentOrderContainer className='current-order' onPlaceOrder = {onPlaceOrder} currentOrders = {currentOrders}/>:null}
    </div>
        {/* <OrderHistoryContainer orderHistory = {orderHistory} /> */}
        <Footer />
     </Router>
  );
}

export default App