import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">

      <Countries></Countries>

    </div>
  );
}






// {/* <LoadCountries></LoadCountries> */ }


// function LoadCountries(params) {

//   const [countries, setCountries] = useState([]);

//   useEffect(() => {

//     fetch("https://restcountries.com/v3/all")
//       .then(response => response.json())
//       .then(data => setCountries(data))


//   }, []);

//   return (<div>

//     <h1>Visiting country of the Worlds!!</h1>
//     <h4>Available countries are {countries.length}</h4>

//     {
//       countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//     }

//   </div>);
// }


// function Country(props) {
//   return (<div >
//     <h2>{props.name}</h2>
//     <h3>Population: {props.population}</h3>

//   </div>);
// }

export default App;
