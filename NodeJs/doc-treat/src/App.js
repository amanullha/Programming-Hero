import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import TakeAppointment from './Pages/Appointment/TakeAppointment/TakeAppointment';
import Login from './Pages/Authentication/Login/Login';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import ForgetPassword from './Pages/Authentication/ForgetPassword/ForgetPassword';
import VerifyEmail from './Pages/Authentication/VerifyEmail/VerifyEmail';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">

      <Header />

      <div className='mx-2 md:mx-5 lg:mx-16 xl:mx-20'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/take-appointment" element={<RequireAuth><TakeAppointment /></RequireAuth>} />

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="//forget-password" element={<ForgetPassword />} />

        </Routes>
      </div>
      <Footer />

      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
      <ToastContainer autoClose={2000} />

    </div>
  );
}

export default App;
