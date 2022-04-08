import { Button, Spinner } from 'react-bootstrap';
import './App.css';
import CardGroup from './Components/CardGroup/CardGroup';
import CardGroup2 from './Components/CardGroup2/CardGroup2';

function App() {
  return (
    <div className="App">
      <h1>using bootstrap</h1>
      <Button>reactBtn</Button>
      <CardGroup2></CardGroup2>

      {/* <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
    </div>
  );
}

export default App;
