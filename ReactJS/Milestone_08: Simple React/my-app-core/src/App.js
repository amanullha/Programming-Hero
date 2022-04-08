import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const products = [

    { name: "laptop", price: "5000" },
    { name: "phone", price: "2000" },
    { name: "watch", price: "45000" },
    { name: "table", price: "9000" }
  ]
    ;


  return (
    <div className="App">


      <ExternalUsers></ExternalUsers>










      {/* <Counter></Counter> */}
      {/* {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
       <Product name="laptop" price="60000"></Product>
      <Product name="phone" price="5000"></Product> 
     */}

    </div>
  );
}


function ExternalUsers(params) {

  const [users, setUsers] = useState([]);

  // useEffect(()=>{},[]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))


  }, []);


  return (
    <div>
      <h2>External Users</h2>
      <p>Length : {users.length}</p>
      {
        users.map(user => {
          return <User name={user.name} email={user.email}></User>
        })
      }
    </div>
  );
}

function User(props) {
  console.log(props);
  return (
    <div style={{ border: "2px solid green", margin: "15px" }}>
      <h2>{props.name}</h2>
      <h4>{props.email}</h4>
    </div>

  );

}


function Counter(params) {

  const [count, setCount] = useState(1);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  const decreaseCount = () => {
    const newCount = count - 1;
    setCount(newCount);
  }

  return (
    <div>

      <h1>Counter : {count} </h1>

      <button onClick={increaseCount} >Increase</button>
      <button onClick={decreaseCount} >Decrease</button>

    </div>
  );
}


function Product(props) {

  const price = props.price;
  const name = props.name;
  return (
    <div className='product'>

      <h3>Name: {name}</h3>
      <p>Price: {price}</p>

    </div>
  );
}


export default App;
