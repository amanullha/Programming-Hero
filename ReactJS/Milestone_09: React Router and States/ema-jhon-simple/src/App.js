import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className='app-container'>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />

        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>


    </div>
  );
}

export default App;
