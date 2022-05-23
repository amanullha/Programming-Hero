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

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Deshboard from './Pages/Deshboard/Deshboard';
import MyAppointment from './Pages/Deshboard/MyAppointment';
import Review from './Pages/Deshboard/Review';
import MyHistory from './Pages/Deshboard/MyHistory';
import Users from './Pages/Deshboard/Users';
import RequireAdmin from './Pages/Authentication/RequireAdmin/RequireAdmin';
import AddDoctor from './Pages/Deshboard/AddDoctor';


function App() {
  return (
    <div className="App">

      <Header />

      <div className='mx-2 md:mx-5 lg:mx-16 xl:mx-20'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/take-appointment" element={<RequireAuth><TakeAppointment /></RequireAuth>} />


          <Route path="/deshboard" element={<RequireAuth><Deshboard /></RequireAuth>} >
            <Route index element={<MyAppointment />}></Route>
            <Route path="reviews" element={<Review />}></Route>
            <Route path="history" element={<MyHistory />}></Route>

            <Route path="users" element={<RequireAdmin><Users /></RequireAdmin>}></Route>
            <Route path="add-doctor" element={<RequireAdmin><AddDoctor /></RequireAdmin>}></Route>

          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />

        </Routes>
      </div>
      <Footer />

      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
      <ToastContainer autoClose={2000} />

    </div>
  );
}

export default App;
