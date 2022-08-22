import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import PresetContainer from './components/PresetContainer'

function App() {
  const [currentOrders, SetCurrentOrders] = useState([])
  

  return (
    <div className="App">
      <Header/>
      <h2>Pile It On, Have Fun!</h2>
      <div className="Build Sandwich">
      <PresetContainer />
      {/* <Menu /> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
