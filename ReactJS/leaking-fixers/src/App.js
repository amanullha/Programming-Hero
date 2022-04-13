import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";




function App() {


  return (
    <div className="">
      <Header />
      <div className="p-5 my-10">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/" element={}/> */}
          {/* <Route path="/" element={}/> */}
        </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
