import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <Header />
      <div className='mx-2 md:mx-5 lg:mx-16 xl:mx-20'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
