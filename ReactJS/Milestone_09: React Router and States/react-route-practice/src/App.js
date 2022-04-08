import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import OrderReview from './Components/OrderReview/OrderReview';
import NotFound from './Components/NotFound/NotFound';
import { Button, Col, Row } from 'react-bootstrap';
import TShirtDetails from './Components/TShirtDetails/TShirtDetails';
import Grandpa from './Components/Grandpa/Grandpa';


function App() {
  return (
    <div className="App ">



      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/home' element={<Home></Home>}>
        </Route>
        <Route path='/tshirt-details/:tshirtId' element={<TShirtDetails></TShirtDetails>}></Route>

        <Route path='order-review' element={<OrderReview></OrderReview>}></Route>

        <Route path='grand-pa' element={<Grandpa></Grandpa>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>




    </div>
  );
}

export default App;
