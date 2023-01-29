import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Courses from './components/Courses/Courses';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SingleCourseDetail from './components/SingleCourseDetail/SingleCourseDetail';

function App() {

  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/course/:crsid'>
            <SingleCourseDetail></SingleCourseDetail>
          </Route>
          <Route path='/events'>
            <Events></Events>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/blogs'>
            <Blogs></Blogs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>

  );
}

export default App;
