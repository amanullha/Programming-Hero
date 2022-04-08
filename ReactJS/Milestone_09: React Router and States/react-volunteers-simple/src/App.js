import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Volenteers from './Components/Volenteers/Volenteers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/volenteers' element={<Volenteers></Volenteers>} />
      </Routes>
    </div>
  );
}

export default App;
