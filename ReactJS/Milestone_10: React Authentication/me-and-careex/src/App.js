import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Contacts from './Pages/Home/Contacts/Contacts';
import Login from './Pages/Home/Login/Login/Login';
import SingUp from './Pages/Home/Login/SignUp/SingUp';
import TopHeader from './Pages/Shared/TopHeader/TopHeader';
import CheckOut from './Pages/Home/CheckOut/CheckOut';
import RequireAuth from './Pages/Home/Login/RequireAuth/RequireAuth';
import TakenAppointment from './Pages/Home/TakenAppointment/TakenAppointment';
import ForgetPass from './Pages/Home/ForgetPass/ForgetPass';
import Services from './Pages/Home/Services/Services';
import Blog from './Pages/Blog/Blog';

function App() {
  return (
    <div className="">
      <TopHeader></TopHeader>
      <Header className="" />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/services' element={<Services />} />


        <Route path='/checkout/:serviceName' element={<CheckOut />} />


        <Route path='/appointment-taken' element={<RequireAuth><TakenAppointment /></RequireAuth>} />


        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SingUp />} />

        <Route path='/forget-password' element={<ForgetPass />} />



        {/* <Route path='/' element={}/> */}


        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
