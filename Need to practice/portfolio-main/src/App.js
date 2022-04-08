import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import AllProjects from './Pages/AllProjects/AllProjects';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/projects'>
            <AllProjects></AllProjects>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
