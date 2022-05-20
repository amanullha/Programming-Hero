import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import TakeAppointment from './Pages/Appointment/TakeAppointment/TakeAppointment';
import Login from './Pages/Authentication/Login/Login';
import SignUp from './Pages/Authentication/SignUp/SignUp';

function App() {
  return (
    <div className="App">

      <Header />
      <div className='mx-2 md:mx-5 lg:mx-16 xl:mx-20'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/take-appointment" element={<TakeAppointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
