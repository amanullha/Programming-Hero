import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import Users from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<Users />} />

        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users/update/:userId" element={<UpdateUser />} />

      </Routes>

    </div>
  );
}

export default App;
