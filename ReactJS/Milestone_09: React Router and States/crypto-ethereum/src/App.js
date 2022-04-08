// import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Coins from './components/Coins/Coins';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Footer from "./components/Footer/Footer";
import CoinDetails from "./components/CoinDetails/CoinDetails";
import BdAddress from "./components/Contact/BdAddress";
import UsAddress from "./components/Contact/UsAddress";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/coins" element={<Coins />} />
        <Route path="/coin-details/:coinId" element={<CoinDetails />} />

        <Route path="/contact" element={<Contact />} >

          <Route path="bd-address" element={<BdAddress />} />
          <Route path="us-address" element={<UsAddress />} />

        </Route>

        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
