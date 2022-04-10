import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Conponents/Home/Home';
import Header from './Conponents/Header/Header';
import NotFound from './Conponents/NotFound/NotFound';
import Login from './Conponents/Login/Login';
import Orders from './Conponents/Orders/Orders';
import Register from './Conponents/Register/Register';
import RequireAuth from './Conponents/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        {/* Private route  */}
        <Route path='/orders' element={<RequireAuth><Orders /></RequireAuth>} />


        <Route path='/register' element={<Register />} />

        <Route path='/login' element={<Login />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
