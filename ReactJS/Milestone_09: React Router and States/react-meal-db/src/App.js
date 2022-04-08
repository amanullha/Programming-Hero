import { Route, Routes } from 'react-router-dom';
import './App.css';
import Meal from './Components/Meal/Meal';
import MealDetails from './Components/MealDetails/MealDetails';
import Meals from './Components/Meals/Meals';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Meals></Meals>}></Route>
        <Route path="/meals" element={<Meals></Meals>}></Route>
        <Route path="/meals/:mealId" element={<MealDetails></MealDetails>}></Route>





        <Route path='*' element={<NotFound></NotFound>}></Route>



      </Routes>

    </div>
  );
}

export default App;
