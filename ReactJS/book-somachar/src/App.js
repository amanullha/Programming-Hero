import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Reviews from './Components/Reviews/Reviews';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';
import Carousel from './Components/MyCarousel/MyCarousel';
import LogIn from './Components/LogIn/LogIn';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>

        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />

        <Route path='*' element={<NotFound></NotFound>} />

      </Routes>






    </div>
  );
}

export default App;
