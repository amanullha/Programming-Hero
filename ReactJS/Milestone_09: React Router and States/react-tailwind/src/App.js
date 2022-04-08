import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Procing from './Components/Procing/Procing';

function App() {
  return (
    <div className="App">

      <Header ></Header>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Procing></Procing>

    </div>
  );
}

export default App;
