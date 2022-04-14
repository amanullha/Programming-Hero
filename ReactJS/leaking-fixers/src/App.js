import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";




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

          <Route path="/login" element={<Login />} />

          {/* <Route path="/" element={}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
