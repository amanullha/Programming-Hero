import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SingUp/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import CheckOut from "./Pages/CheckOut/CheckOut/CheckOut";
import Loading from "./Pages/Shared/Loading/Loading";
import AddService from "./Pages/Home/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";




function App() {


  return (
    <div className=" mx-auto">
      <Header />

      <div className="p-5 my-10">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service/:serviceId" element={<ServiceDetails />} />

          <Route path="/checkout" element={<RequireAuth><CheckOut /></RequireAuth>} />

          <Route path="/add-service" element={<RequireAuth>
            <AddService />
          </RequireAuth>} />

          <Route path="/manage-services" element={<RequireAuth>
            <ManageServices />
          </RequireAuth>} />
          {/* <Route path="/checkout" element={<CheckOut />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          {/* <Route path="/" element={}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
